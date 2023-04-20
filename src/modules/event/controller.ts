import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { createEventDTO } from './DTO/createEventDTO';
import { EventService } from './service';
import { AuthGuard } from '../auth/index.guard';

@Controller('/event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @UseGuards(AuthGuard)
  @Get('/')
  async findEventRoute() {}

  @Post('/')
  async createEventRoute(@Body() body: createEventDTO) {
    return await this.eventService.createEvent(body);
  }
}
