import { Body, Controller, Get, Post } from '@nestjs/common';
import { createEventDTO } from './DTO/createEventDTO';
import { EventService } from './service';

@Controller('/event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get('/')
  async findEventRoute() {}

  @Post('/')
  async createEventRoute(@Body() body: createEventDTO) {
    return await this.eventService.createEvent(body);
  }
}
