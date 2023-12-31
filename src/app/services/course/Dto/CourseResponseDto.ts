import { UserResponseDto } from '../../user/Dto/user.dto';

export interface CourseResponseDto {
  id: string;

  name: string;

  headerDescription: string;

  description: string;

  price: number;

  category: string;

  likes: number;

  image: string;

  subImage: string;

  media: MediaDto;

  topic: TopicDto;

  user: UserResponseDto;
}

export interface MediaDto {
  youTubeVideoLink: string;
  mediaPdfLink: string;
  resourceLink: ResourceLinkDto;
}

export interface TopicDto {
  topic: string;
  description: string;
}

export interface ResourceLinkDto {
  name: string;
  link: string;
}
