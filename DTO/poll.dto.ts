import { IsString, IsArray, ArrayNotEmpty } from 'class-validator'

export class Poll {
  @IsString()
  id: string

  @IsString()
  question: string

  @IsArray()
  @ArrayNotEmpty()
  options: string[]
}
