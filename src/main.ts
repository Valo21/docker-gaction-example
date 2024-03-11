import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const PORT: number = Number(process.env.PORT) || 3000;
  const app = await NestFactory.create(AppModule);

  await app.listen(PORT);
  Logger.log('App listening at port ' + PORT);
}
bootstrap();
