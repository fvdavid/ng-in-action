import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-list-product',
  imports: [MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListProductComponent {
  recomendationsProducts = [
    {
      id: 1,
      name: 'Hotel Ajibata',
      shortdescription: 'Smart Cabin with Toba Lake View | 2pax',
      imgUrl:
        'https://a0.muscache.com/im/pictures/miso/Hosting-1094647271173030623/original/8197468b-ed68-4437-869a-a1aa327c3828.jpeg?im_w=720',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
        eaque, exercitationem praesentium nihil.
      `,
      price: 950000,
      place: 'Ajibata',
      country: 'Indonesia',
      rating: 4.5,
      reviews: 100,
      isFavorite: false,
      tags: ['Lake Toba', 'Nature', 'Sunset', 'Cold', 'Winter'],
    },

    {
      id: 2,
      name: 'The Coldest Sunset',
      shortdescription: 'Built in 1980',
      imgUrl:
        'https://a0.muscache.com/im/pictures/miso/Hosting-839878227441241617/original/e35b9df2-bdb6-45b4-b746-cbbca329c3d6.jpeg?im_w=720',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
        eaque, exercitationem praesentium nihil.
      `,
      price: 100,
      place: 'Preding',
      country: 'Austria',
      rating: 4.5,
      reviews: 100,
      isFavorite: false,
      tags: ['Mountain', 'Nature', 'Sunset', 'Cold', 'Winter'],
    },

    {
      id: 3,
      name: 'The Coldest Sunset',
      shortdescription: 'Honemoon',
      imgUrl:
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MzU1Mzg0MjY%3D/original/f6270ac8-4a7c-42e6-9798-e93e63905fd5.jpeg?im_w=720',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
        eaque, exercitationem praesentium nihil.
      `,
      price: 100,
      place: 'Preding',
      country: 'Austria',
      rating: 4.5,
      reviews: 100,
      isFavorite: false,
      tags: ['Mountain', 'Nature', 'Sunset', 'Cold', 'Winter'],
    },

    {
      id: 4,
      name: 'The Coldest Sunset',
      shortdescription: 'Built in 1880',
      imgUrl:
        'https://a0.muscache.com/im/pictures/miso/Hosting-53519419/original/1feaf4a1-e316-431e-b1d6-eb21321333de.jpeg?im_w=720',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
        eaque, exercitationem praesentium nihil.
      `,
      price: 100,
      place: 'Preding',
      country: 'Austria',
      rating: 4.5,
      reviews: 100,
      isFavorite: false,
      tags: ['Mountain', 'Nature', 'Sunset', 'Cold', 'Winter'],
    },

    {
      id: 5,
      name: 'The Coldest Sunset',
      shortdescription: 'Built in 1880',
      imgUrl:
        'https://a0.muscache.com/im/pictures/miso/Hosting-53519419/original/1feaf4a1-e316-431e-b1d6-eb21321333de.jpeg?im_w=720',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
        eaque, exercitationem praesentium nihil.
      `,
      price: 100,
      place: 'Preding',
      country: 'Austria',
      rating: 4.5,
      reviews: 100,
      isFavorite: false,
      tags: ['Mountain', 'Nature', 'Sunset', 'Cold', 'Winter'],
    },

    {
      id: 6,
      name: 'The Coldest Sunset',
      shortdescription: 'David live here',
      imgUrl:
        'https://a0.muscache.com/im/pictures/3578a2f6-1772-4437-9d8c-26a33d4d927f.jpg?im_w=720',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
        eaque, exercitationem praesentium nihil.
      `,
      price: 100,
      place: 'Preding',
      country: 'Austria',
      rating: 4.5,
      reviews: 100,
      isFavorite: false,
      tags: ['Mountain', 'Nature', 'Sunset', 'Cold', 'Winter'],
    },

    {
      id: 7,
      name: 'The Coldest Sunset',
      shortdescription: 'Built in 1980',
      imgUrl:
        'https://a0.muscache.com/im/pictures/miso/Hosting-839878227441241617/original/e35b9df2-bdb6-45b4-b746-cbbca329c3d6.jpeg?im_w=720',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
        eaque, exercitationem praesentium nihil.
      `,
      price: 100,
      place: 'Preding',
      country: 'Austria',
      rating: 4.5,
      reviews: 100,
      isFavorite: false,
      tags: ['Mountain', 'Nature', 'Sunset', 'Cold', 'Winter'],
    },

    {
      id: 8,
      name: 'The Coldest Sunset',
      shortdescription: 'Honemoon',
      imgUrl:
        'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MzU1Mzg0MjY%3D/original/f6270ac8-4a7c-42e6-9798-e93e63905fd5.jpeg?im_w=720',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
        eaque, exercitationem praesentium nihil.
      `,
      price: 100,
      place: 'Preding',
      country: 'Austria',
      rating: 4.5,
      reviews: 100,
      isFavorite: false,
      tags: ['Mountain', 'Nature', 'Sunset', 'Cold', 'Winter'],
    },

    {
      id: 9,
      name: 'The Coldest Sunset',
      shortdescription: 'Built in 1880',
      imgUrl:
        'https://a0.muscache.com/im/pictures/miso/Hosting-53519419/original/1feaf4a1-e316-431e-b1d6-eb21321333de.jpeg?im_w=720',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
        eaque, exercitationem praesentium nihil.
      `,
      price: 100,
      place: 'Preding',
      country: 'Austria',
      rating: 4.5,
      reviews: 100,
      isFavorite: false,
      tags: ['Mountain', 'Nature', 'Sunset', 'Cold', 'Winter'],
    },

    {
      id: 10,
      name: 'The Coldest Sunset',
      shortdescription: 'David live here',
      imgUrl:
        'https://a0.muscache.com/im/pictures/3578a2f6-1772-4437-9d8c-26a33d4d927f.jpg?im_w=720',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
        eaque, exercitationem praesentium nihil.
      `,
      price: 100,
      place: 'Preding',
      country: 'Austria',
      rating: 4.5,
      reviews: 100,
      isFavorite: false,
      tags: ['Mountain', 'Nature', 'Sunset', 'Cold', 'Winter'],
    },
  ];
}
