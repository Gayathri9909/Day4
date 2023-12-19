import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-district',
  standalone: true,
  imports: [RouterLink,SlicePipe],
  templateUrl: './district.component.html',
  styleUrl: './district.component.css'
})
export class DistrictComponent {
  district:any = [
    {
      id:1,
      title: "Trivandrum",
      image: "assets/images/THIRU.jpg",
      dis: "Thiruvananthapuram is a major tourist centre, known for the Padmanabhaswamy Temple, the beaches of Kovalam and Varkala, the backwaters of Poovar and Anchuthengu and its Western Ghats tracts of Ponmudi and the Agastya Mala."
      ,wiki:"https://en.wikipedia.org/wiki/Thiruvananthapuram"
    },
    {
      id:2,
      title: "kollam",
      image: "assets/images/KOL.jpg",
      dis :"Kollam is a city in the state of Kerala, on India's Malabar Coast. It’s known as a trade hub and for its beaches, like lively Kollam and secluded Thirumullavaram. Sardar Vallabhbhai Patel Police Museum has artifacts tracing the history of the police force. Nearby, Ashtamudi Lake is a gateway to the Kerala backwaters, a network of waterways rich with vegetation."
      ,wiki:"https://en.wikipedia.org/wiki/Kollam"
    },
    {
      id:3,
      title: "Alapuzha",
      image: "assets/images/alapuzha.jpg",
      dis: "Alappuzha (or Alleppey) is a city on the Laccadive Sea in the southern Indian state of Kerala. It's best known for houseboat cruises along the rustic Kerala backwaters, a network of tranquil canals and lagoons. Alappuzha Beach is the site of the 19th-century Alappuzha Lighthouse. The city's Mullakkal Temple features a traditional design."
      ,wiki:"https://en.wikipedia.org/wiki/Alappuzha"
    },
    {
      id:4,
      title: "Ernakulam",
      image: "assets/images/ernakulam.jpg",
      dis: "Sprawling, residential Ernakulam is known for Marine Drive, a busy waterfront promenade where boats offer backwater cruises. The Kerala Folklore and Hill Palace museums explore local heritage through art and antiquities. Shops along Broadway and on MG Road sell fabrics, crafts, and spices, while modern Lulu Mall also has a cinema and an ice rink"
      ,wiki:"https://en.wikipedia.org/wiki/Ernakulam"
    },  
    {
      id:5,
      title: "Iduki",
      image: "assets/images/IDUKKI.jpg",
      dis: "Idukki district is a densely forested, mountainous region in the south Indian state of Kerala. In the north, Anamudi mountain towers over Eravikulam National Park, where the rare, blue Neelakurinji flower blooms every 12 years. Nearby, Munnar is a hill station known for its sprawling tea plantations and Tea Museum."
      ,wiki:"https://en.wikipedia.org/wiki/Idukki_district"
    },
    {
      id:6,
      title: "Thrissur",
      image: "assets/images/thri.jpg",
      dis: "Thrissur is a city in the south Indian state of Kerala. It's known for sacred sites and colorful festivals. In the center is Vadakkumnathan Temple, dedicated to Lord Shiva and adorned with murals. The ornate, Indo-Gothic Our Lady of Dolours Basilica is nearby. To the north, Thiruvambady Temple is home to several elephants."
      ,wiki:"https://en.wikipedia.org/wiki/Thrissur"
    },
    {
      id:7,
      title: "kannur",
      image: "assets/images/kannur.jpg",
      dis: "Kannur is a coastal city in the south Indian state of Kerala. It was once an ancient trading port. Enduring monuments such as 16th-century St. Angelo Fort, once occupied by European colonial forces, show the city’s significant role in the spice trade. Housed in a former palace, the Arakkal Museum highlights Kerala's one Muslim royal family. The palm-fringed sands of Payyambalam Beach run along Kannur’s western shore." 
       ,wiki:"https://en.wikipedia.org/wiki/Kannur"
    },
       {
        id:8,
        title: "Pathanamthitta",
        image: "assets/images/path.jpg",
        dis:"Pathanamthitta, is a municipality situated in the Southern Kerala, India, spread over an area of 23.50 km². It is the administrative capital of Pathanamthitta district. The town has a population of 37,538."
       , wiki:"https://en.wikipedia.org/wiki/Pathanamthitta"
      },
      {
        id:9,
        title: "Wayanad",
        image: "assets/images/wayan.jpg",
        dis:"Wayanad is a rural district in Kerala state, southwest India. In the east, the Wayanad Wildlife Sanctuary is a lush, forested region with areas of high altitude, home to animals including Asiatic elephants, tigers, leopards and egrets. In the Ambukuthi Hills to the south, Edakkal Caves contain ancient petroglyphs, some dating back to the Neolithic age.",
        wiki:"https://en.wikipedia.org/wiki/Wayanad_district"
            },
      {
        id:10,
        title: "Kasargod",
        image: "assets/images/kasa.jpg",
        dis:"Kasaragod is a municipal town and administrative headquarters of Kasaragod district in the state of Kerala, India. Established in 1966, Kasaragod was the first municipal town in the district. It is the northernmost district of Kerala and is also known as Sapta Bhasha Sangama Bhumi.",
        wiki:"https://en.wikipedia.org/wiki/Kasaragod" 
           },
      {
        id:11,
        title: "Malappuram",
        image: "assets/images/mala.jpg",
        dis:"Malappuram is a city and the headquarters of the Malappuram district in Kerala, India. It is the 4th largest urban agglomeration in Kerala and the 20th largest in India and a city in the Indian state of Kerala, spread over an area of 158.20 km² including the surrounding suburban areas.",
        wiki:"https://en.wikipedia.org/wiki/Malappuram"
      },
      {
        id:12,
        title: "Kottayam",
        image: "assets/images/kota.jpg",
        dis:"Kottayam is a city in the Indian state of Kerala, flanked by the Western Ghats on the east and the Vembanad Lake and paddy fields of Kuttanad on the west. It is the district headquarters of Kottayam district, located in south-west Kerala.",
        wiki:"https://en.wikipedia.org/wiki/Kottayam"
      },
      {
        id:13,
        title: "Palakkad",
        image: "assets/images/pala.jpg",
        dis:"Palakkad, or Palghat, is a city in Kerala, a state in southwestern India. The 18th-century Palakkad Fort has sturdy battlements, a moat and a Hanuman temple on its grounds. North, on the Kalpathy River, the 15th-century Viswanatha Swamy Temple is the main venue of the famous Ratholsavam chariot festival. Northeast, near Malampuzha Dam, the town of Malampuzha has a rock garden created from recycled materials.",
        wiki:"https://en.wikipedia.org/wiki/Palakkad"
      },
      {
        id:14,
        title: "Kozhikode",
        image: "assets/images/kozhi.jpg",
        dis:"Kozhikode is a coastal city in the south Indian state of Kerala. It was a significant spice trade center and is close to Kappad Beach, where Portuguese explorer Vasco da Gama landed in 1498. The central Kozhikode Beach, overlooked by an old lighthouse, is a popular spot for watching the sunset. Inland, tree-lined Mananchira Square, with its musical fountain, surrounds the massive Mananchira Tank, an artificial pond.",
        wiki:"https://en.wikipedia.org/wiki/Kozhikode"
      },
  ];
 
 
}


