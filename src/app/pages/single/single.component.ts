import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-single',
  standalone: true,
  imports: [],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {
  district:any = [
    {
      id:1,
      title: "Trivandrum",
      image: "assets/images/THIRU.jpg",
      dis: "Thiruvananthapuram is a major tourist centre, known for the Padmanabhaswamy Temple, the beaches of Kovalam and Varkala, the backwaters of Poovar and Anchuthengu and its Western Ghats tracts of Ponmudi and the Agastya Mala."
    },
    {
      id:2,
      title: "kollam",
      image: "assets/images/KOL.jpg",
      dis :"Kollam is a city in the state of Kerala, on India's Malabar Coast. It’s known as a trade hub and for its beaches, like lively Kollam and secluded Thirumullavaram. Sardar Vallabhbhai Patel Police Museum has artifacts tracing the history of the police force. Nearby, Ashtamudi Lake is a gateway to the Kerala backwaters, a network of waterways rich with vegetation."

    },
    {
      id:3,
      title: "Alapuzha",
      image: "assets/images/alapuzha.jpg",
      dis: "Alappuzha (or Alleppey) is a city on the Laccadive Sea in the southern Indian state of Kerala. It's best known for houseboat cruises along the rustic Kerala backwaters, a network of tranquil canals and lagoons. Alappuzha Beach is the site of the 19th-century Alappuzha Lighthouse. The city's Mullakkal Temple features a traditional design."
    },
    {
      id:4,
      title: "Ernakulam",
      image: "assets/images/ernakulam.jpg",
      dis: "Sprawling, residential Ernakulam is known for Marine Drive, a busy waterfront promenade where boats offer backwater cruises. The Kerala Folklore and Hill Palace museums explore local heritage through art and antiquities. Shops along Broadway and on MG Road sell fabrics, crafts, and spices, while modern Lulu Mall also has a cinema and an ice rink"
    },  
    {
      id:5,
      title: "Iduki",
      image: "assets/images/IDUKKI.jpg",
      dis: "Idukki district is a densely forested, mountainous region in the south Indian state of Kerala. In the north, Anamudi mountain towers over Eravikulam National Park, where the rare, blue Neelakurinji flower blooms every 12 years. Nearby, Munnar is a hill station known for its sprawling tea plantations and Tea Museum."
    },
    {
      id:6,
      title: "Thrissur",
      image: "assets/images/thri.jpg",
      dis: "Thrissur is a city in the south Indian state of Kerala. It's known for sacred sites and colorful festivals. In the center is Vadakkumnathan Temple, dedicated to Lord Shiva and adorned with murals. The ornate, Indo-Gothic Our Lady of Dolours Basilica is nearby. To the north, Thiruvambady Temple is home to several elephants."
    },
    {
      id:7,
      title: "kannur",
      image: "assets/images/kannur.jpg",
      dis: "Kannur is a coastal city in the south Indian state of Kerala. It was once an ancient trading port. Enduring monuments such as 16th-century St. Angelo Fort, once occupied by European colonial forces, show the city’s significant role in the spice trade. Housed in a former palace, the Arakkal Museum highlights Kerala's one Muslim royal family. The palm-fringed sands of Payyambalam Beach run along Kannur’s western shore."   
     }


]
  constructor(public route :ActivatedRoute){}
  
  ngOnInit(){
    this.getDetails();
  }
  id:any;
  data:any;
  getDetails(){
    this.id =this.route.snapshot.params["id"];
    this.data =this.district.filter((d:any)=>d.id==this.id);
  }
}
