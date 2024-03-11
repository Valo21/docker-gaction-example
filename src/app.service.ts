import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Docker image has been build and published by Github Actions!';
  }
}
