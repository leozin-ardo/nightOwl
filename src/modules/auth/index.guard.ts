import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import UnauthorizedCredentialsException from './exception/unauthorizedCredentialsException';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const apiToken = this.extractApiToken(request);

      if (!apiToken)
        throw new UnauthorizedCredentialsException('Token doesnt has found');

      return this.jwtService
        .verifyAsync(apiToken, {
          secret: process.env.JWT_SECRET,
        })
        .then((userData) => true)
        .catch((err) => {
          if (err.expiredAt)
            throw new UnauthorizedCredentialsException('Token expired');
          return false;
        });
    } catch (err) {
      throw err;
    }
  }

  extractApiToken(request: Request): string {
    try {
      const [type, token] = request.headers?.authorization?.split(' ') ?? [];
      return type == 'Bearer' && token.length > 0 ? token : undefined;
    } catch (err) {
      return err;
    }
  }
}
