import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-shoppage',
  templateUrl: './shoppage.component.html',
  styleUrls: ['./shoppage.component.scss'],
})
export class ShoppageComponent {


  // es gibt immer eienn Klasse mit dem Namen 'app componenets '
  public username = 'User';
  public description = 'Daily Deal'; 


  public productssale = [
    {
      title: 'Asics Skysensor Japan white',
      img: 'https://willya.de/wp-content/uploads/2018/09/ASICS_SKYSENSOR_JAPAN_1.jpg',
      description: 'The Made in Japan Skysensor, part of the Japan Fast Pack, was designed with marathon runners in mind. This Samurai inspired ultra-lightweight sneaker is made using a white performance mesh upper with suede overlays. The mesh upper provides runners with a breathable solution while SpevaFoam in the front and GEL in the back provide the cushionning needed for long distance running.',
      price: '1800,00', 
      salePrice: '74.99',
      link: '',
      sale: true
    },
    {
      title: 'Asics Kayano 5 og',
      img: 'https://cdna.lystit.com/520/650/n/photos/mytheresa/17c2342c/asicsr-WHITEWHITE-Gel-kayano-5-Og-Sneakers.jpeg',
      description: 'With heavy overlays, the gel-kayano 5 og sneakers from asics in white, black and blue bring back the iconic running silhouette of the late nineties designed, with a chunky rubber sole and signature gelTM technology for shock absorption and comfort.',
      price: 98,
      sale: true
    },
    {
      title: 'Asics Kayano 14- pure gold',
      img: 'https://th.bing.com/th/id/OIP.LBDVk6R07zCHFi8G7nDnoAHaE8?w=216&h=180&c=7&r=0&o=5&pid=1.7',
      description: 'Der ASICS Gel Kayano 14 Pure Gold ist ein Laufschuh welcher an den Style der frühen 2000er Jahren erinnert. Die Passform des Obermaterials wurde verbessert, während die geschichtete Leder- und Netzkonstruktion aus dem Jahr 2008 beibehalten wird. Die goldenen Akzente an der Ferse verpassen dem Look des Schuhs einen besonderen Feinschliff.',
      price: 160,
      sale: false
    },
    {
      title: 'Asics Gel Kayano 20 th Anniversary Pack',
      img: 'https://th.bing.com/th/id/R.d6cfc6eaf2238182629c83d43e41e2e1?rik=fGfCRyYY0v0FZQ&riu=http%3a%2f%2fhypebeast.com%2fimage%2f2013%2f10%2fasics-gel-kayano-20th-anniversary-pack-0.jpg&ehk=yMfFnqhtAsOPkSPI8UF9fNsmZrL0plrkJ5l%2bf5jN81M%3d&risl=&pid=ImgRaw&r=0',
      description: 'To celebrate 20 successful years of the Gel-Kayano, ASICS has produced this very special Gel-Kayano 20th Anniversary Pack. To celebrate 20 successful years of the Gel-Kayano, ASICS has produced this very special Gel-Kayano 20th Anniversary Pack.',
      price: 180,
      sale: false
    },
    {
      title: 'Asics gel Kayano Trainere-Two Monochrome Pack',
      img: 'https://th.bing.com/th/id/R.82e9e96503477891e1834a4209d88d39?rik=3w8uhpdpWK2E8w&riu=http%3a%2f%2fimages.solecollector.com%2fcomplex%2fimage%2fupload%2fw_1200%2fsvadqxpioogcjdplvgxd&ehk=5ndvgDWbydKuYttpdO8%2fIlvssGvjWIv01VBIWW7FB9A%3d&risl=&pid=ImgRaw&r=0',
      description: 'The prolonged presence of the Asics Gel Kayano at retail has allowed the shoe to tick more and more boxes in terms of standard colorways.Much like the Asics Gel Lyte III has done in recent months, the Kayano is now moving into the monochrome range with these t',
      price: 190,
      sale: false
    }
  ]
}
