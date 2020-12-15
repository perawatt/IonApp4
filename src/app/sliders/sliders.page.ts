import { Component, OnInit } from "@angular/core";
import { AlertController } from '@ionic/angular';
import { IonManaLib } from "ion-m-lib";

@Component({
  selector: "app-sliders",
  templateUrl: "./sliders.page.html",
  styleUrls: ["./sliders.page.scss"],
})
export class SlidersPage implements OnInit {
  public mcontentid: string = "sliders";
  public hasLoaded: string;
  public data$ = Promise.resolve<{}>({});

  sliderOpts = {
    zoom: false,
    slidesPerView: 4,
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: true,
    loop: true,
    ////initialSlide: 4, เริ่มที่เท่าไหร่
  }

  sliderOpts4 = {
    zoom: false,
    slidesPerView: 4,
    spaceBetween: 20,
    centeredSlides: false,
    autoplay: false,
    loop: false,
    freeMode :true
    ////initialSlide: 4, เริ่มที่เท่าไหร่
  }
  sliderOpts44 = {
    zoom: false,
    slidesPerView: 4.5,
    spaceBetween: 20,
    centeredSlides: false,
    autoplay: false,
    loop: false,
    freeMode :true
    ////initialSlide: 4, เริ่มที่เท่าไหร่
  }
  sliderOpts5 = {
    zoom: false,
    slidesPerView: 5,
    spaceBetween: 2,
    centeredSlides: false,
  }

  imageData: string[] = [
    "https://dynamic.brandcrowd.com/asset/logo/9173af46-4ce3-460a-930b-c6486f46cc9f/logo?v=4",
    "https://image.freepik.com/free-vector/e-sports-team-logo-with-dragon_113398-3.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRpRRO0GcqBEqoBUY61nlTApEekZ5hrWfqiUg&usqp=CAU",
    "https://i.pinimg.com/736x/fa/70/08/fa70088d40d9ebcf29c24f19f685496c.jpg",
    "https://i.pinimg.com/originals/7e/73/1f/7e731f9fcfc7bd222e14c2e6850c69db.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQR5UlQltq5UjmCO9z2fthIH82VnTQUPgMDYQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJxzhwDiYlTv6c1xKf-2H_ToesxDgZGZPI0Q&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAaUa_-4sMm0bdgTBgRpPo3JPrjxWt6ITvOA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsymdfDnZXAlvjGNZuzO2GAfaOAkcbbjb2yQ&usqp=CAU",
    "https://image.shutterstock.com/image-illustration/sport-team-emblem-logo-design-600w-673304992.jpg",
    "https://i.pinimg.com/originals/39/60/0c/39600ce1c82e8757c104260fef4435b2.jpg",
    "https://cdn5.f-cdn.com/contestentries/272665/14914534/55f044188292b_thumb900.jpg",
    "https://image.shutterstock.com/image-vector/football-wolf-team-logo-600w-1136561957.jpg",
    "https://image.shutterstock.com/image-photo/image-260nw-1028804608.jpg",
    "https://cdn3.f-cdn.com/contestentries/1325431/24258960/5af8a9cb5251e_thumb900.jpg",
    "https://image.shutterstock.com/image-illustration/sport-team-emblem-logo-design-600w-673304992.jpg"
  ];

  dataInfo =
    [
      { name: "Team001", image: "https://dynamic.brandcrowd.com/asset/logo/9173af46-4ce3-460a-930b-c6486f46cc9f/logo?v=4", rating: 10 },
      { name: "Team002", image: "https://image.freepik.com/free-vector/e-sports-team-logo-with-dragon_113398-3.jpg", rating: 20 },
      { name: "Team003", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRpRRO0GcqBEqoBUY61nlTApEekZ5hrWfqiUg&usqp=CAU", rating: 30 },
      { name: "Team004", image: "https://i.pinimg.com/736x/fa/70/08/fa70088d40d9ebcf29c24f19f685496c.jpg", rating: 450 },
      { name: "Team005", image: "https://i.pinimg.com/originals/7e/73/1f/7e731f9fcfc7bd222e14c2e6850c69db.jpg", rating: 50 },
      { name: "Team006", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQR5UlQltq5UjmCO9z2fthIH82VnTQUPgMDYQ&usqp=CAU", rating: 0 },
      { name: "Team007", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJxzhwDiYlTv6c1xKf-2H_ToesxDgZGZPI0Q&usqp=CAU", rating: 0 },
      { name: "Team008", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAaUa_-4sMm0bdgTBgRpPo3JPrjxWt6ITvOA&usqp=CAU", rating: 0 },
      { name: "Team009", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsymdfDnZXAlvjGNZuzO2GAfaOAkcbbjb2yQ&usqp=CAU", rating: 0 },
      { name: "Team010", image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/75178561/original/b6f196a7360bed181b453ae3e962857f494e2dd4/design-your-sports-mascot-logo.jpg", rating: 0 },
      { name: "Team011", image: "https://image.shutterstock.com/image-illustration/sport-team-emblem-logo-design-600w-673304992.jpg", rating: 0 },
      { name: "Team012", image: "https://i.pinimg.com/originals/39/60/0c/39600ce1c82e8757c104260fef4435b2.jpg", rating: 0 },
      { name: "Team013", image: "https://png.pngtree.com/png-clipart/20200727/original/pngtree-basketball-team-logo-design-template-png-image_5298320.jpg", rating: 0 },
      { name: "Team014", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/United_States_women%27s_national_soccer_team_logo.svg/1200px-United_States_women%27s_national_soccer_team_logo.svg.png", rating: 0 },
      { name: "Team015", image: "https://cdn5.f-cdn.com/contestentries/272665/14914534/55f044188292b_thumb900.jpg", rating: 0 },
      { name: "Team016", image: "https://png.pngtree.com/png-clipart/20191120/original/pngtree-vector-of-e-sports-team-logo-design-knight-armor-with-weapon-png-image_5003599.jpg", rating: 0 },
      { name: "Team017", image: "https://image.shutterstock.com/image-vector/football-wolf-team-logo-600w-1136561957.jpg", rating: 0 },
      { name: "Team018", image: "https://image.shutterstock.com/image-photo/image-260nw-1028804608.jpg", rating: 0 },
      { name: "Team019", image: "https://cdn3.f-cdn.com/contestentries/1325431/24258960/5af8a9cb5251e_thumb900.jpg", rating: 0 },
      { name: "Team020", image: "https://image.shutterstock.com/image-illustration/sport-team-emblem-logo-design-600w-673304992.jpg", rating: 0 },
    ];

  constructor(private svc: IonManaLib, public alertController: AlertController) { }

  ngOnInit() {
    this.svc.initPageApi(this.mcontentid);
  }

  async openPreview(img: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: img,
      buttons: ['OK']
    });
    await alert.present();
  }

  go() {
    this.svc.visitEndpoint(this.mcontentid, "https://s.manal.ink/np/nxxxyyy-889");
  }

}

