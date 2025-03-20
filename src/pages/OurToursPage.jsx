
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaRegSadCry } from "react-icons/fa"; // Import an icon for 'no tour found'
const BookingForm = "../components/BookingForm";
const artmuseum = "/assets/images/tours/artmuseum.jpeg";
const handicraft = '/assets/images/handicraft.jpeg'
const artvillage = "/assets/images/tours/artvillage.jpeg";
const ethnographic = "/assets/images/tours/ethnographic.jpeg";
const gisenyi = "/assets/images/tours/gisenyi.jpeg";
const gorilla = "/assets/images/tours/gorilla.jpeg";
const healers = "/assets/images/tours/healears.jpeg";
const huye = "/assets/images/tours/huye.jpeg";
const ibyiwacu = "/assets/images/tours/ibyiwacu.jpeg";
const kigalicity = "/assets/images/tours/kigalicity.jpeg";
const kigaligenocide = "/assets/images/tours/kigaligenocide.jpeg";
const musanzecaves = "/assets/images/tours/musanzecaves.jpeg";
const nyanza = "/assets/images/tours/nyanza.jpeg";
const nyungwe = "/assets/images/tours/nyungwe.jpeg";
const akagera = "/assets/images/tours/akagera.jpeg";
const kivu = "/assets/images/tours/kivu.jpeg";

const tours = [
  {
    id: 1,
    name: "Huye Museum",
    district: "Huye",
    description:
      "Explore the cultural heritage of Rwanda at the Huye Museum, one of the most significant museums in the country.",
    location: "Huye, Southern Province, Rwanda",
    image: huye,
  },
  {
    id: 2,
    name: "Kigali Genocide Memorial",
    description:
      "Visit the Kigali Genocide Memorial and learn about the history and resilience of Rwanda.",
    location: "Kigali, Rwanda",
    district: "Gasabo",
    image: kigaligenocide,
  },
  {
    id: 3,
    district: "Nyanza",
    name: "Nyanza Royal Palace",
    description:
      "Discover Rwanda’s royal history at the Nyanza Royal Palace, a historical and cultural landmark.",
    location: "Nyanza, Southern Province, Rwanda",
    image: nyanza,
  },
  {
    id: 4,
    name: "Musanze Caves",
    district: "Musanze",
    description:
      "Explore the historic Musanze Caves and enjoy the breathtaking landscapes.",
    location: "Musanze, Northern Province, Rwanda",
    image: musanzecaves,
  },
  {
    id: 5,
    district: "Nyarugenge",
    name: "Kigali City Tour",
    description:
      "Discover the vibrant culture and history of Kigali, Rwanda’s capital city.",
    location: "Kigali, Rwanda",
    image: kigalicity,
  },
  {
    id: 6,
    district: "Rubavu",
    name: "Ibyiwacu Cultural Village",
    description:
      "Experience the rich cultural traditions of Rwanda at the Ibyiwacu Cultural Village, where you can learn about traditional Rwandan dances and customs.",
    location: "Gisenyi, Western Province, Rwanda",
    image: ibyiwacu,
  },
  {
    id: 7,
    district: "Rusizi",
    name: "Nyungwe National Park",
    description:
      "Explore the beauty of Nyungwe National Park, known for its biodiversity, including chimpanzee tracking and scenic hikes through the forest.",
    location: "Southwest Rwanda",
    image: nyungwe,
  },
  {
    id: 8,
    name: "Lake Kivu",
    district: "Karongi",
    description:
      "Enjoy the tranquility of Lake Kivu, one of Africa’s Great Lakes, offering boat rides and relaxation by the shores of the lake.",
    location: "Western Rwanda",
    image: kivu,
  },
  {
    id: 9,
    district: "Musanze",
    name: "Gorilla Trekking in Volcanoes National Park",
    description:
      "Experience the once-in-a-lifetime adventure of gorilla trekking in Volcanoes National Park, where you can see the endangered mountain gorillas in their natural habitat.",
    location: "Ruhengeri, Northern Province, Rwanda",
    image: gorilla,
  },
  {
    id: 10,
    name: "Ethnographic Museum of Rwanda",
    district: "Gasabo",
    description:
      "A must-see museum showcasing Rwandan history, including artifacts, traditional costumes, and cultural items.",
    location: "Kigali, Rwanda",
    image: ethnographic,
  },
  {
    id: 11,
    name: "Rwanda Art Museum",
    district: "Gasabo",
    description:
      "Discover contemporary Rwandan art at the Rwanda Art Museum, housed in the former Presidential Palace.",
    location: "Kigali, Rwanda",
    image: artmuseum,
  },
  {
    id: 12,
    name: "King's Palace Museum",
    district: "Nyanza",
    description:
      "Explore the history of Rwanda’s monarchy at the King’s Palace Museum, which showcases the traditional royal life.",
    location: "Nyanza, Southern Province, Rwanda",
    image: nyanza,
  },
  {
    id: 13,
    name: "Rwanda Craft Village",
    district: "Gasabo",
    description:
      "Visit the Rwanda Craft Village in Kigali for unique handcrafts made by local artisans, perfect for souvenirs.",
    location: "Kigali, Rwanda",
    image: artvillage,
  },
  {
    id: 14,
    district: "Nyagatare",
    name: "Akagera National Park",
    description:
      "Witness Rwanda’s wildlife, including the Big Five, in Akagera National Park, a haven for safaris and nature walks.",
    location: "Eastern Rwanda",
    image: akagera,
  },
  {
    id: 15,
    name: "Gisenyi",
    district: "Rubavu",
    description:
      "Visit Gisenyi, a beautiful town on the shores of Lake Kivu, known for its serenity and cultural experiences.",
    location: "Western Rwanda",
    image: gisenyi,
  },
  {
    id: 16,
    district: "anywhere",
    name: "Traditional Healers Tour",
    description:
      "Experience Rwanda’s traditional medicine and cultural healing practices through guided tours in rural communities.",
    location: "Various Locations, Rwanda",
    image: healers,
  },
  {
    id:17,
    district:"Bugesera",
    name:"Bayanga",
    description:"Urwobo rwa Bayanga is located in Bugesera district, Mayange sector. In oral traditions,the site is known in Cacana legend as the place where Cacana met with the death keepingits cow. The rwabayanga well is situated in a rock, oral traditions attribute it to Kigeli IVRwabugiri, near the rock there a big ficus attributed to Rwabugiri’s residence where hemarried Rugenge, from Burindi whom was sister to King Cyoya. In recent history,Rwabayanga well was used as massive grave during the genocide against Tutsi",
    location:"Bugesera , Eastern Rwanda"
  },
  {
    id:18,
    district:"Gatsibo",
    name:"Urutare rwa Ngarama",
    description:"Urutare rwa Ngarama is a cultural site located in Ngarama sector, Gatsibo District. There are three versions of oral traditions about it, and all converge on the incidence occurring on that rock and from which it got the name. In a version which is more popular across the country, Urutare rwa Ngarama represents a mythical hero, Ngarama, a strong man who fought and killed a dangerous eagle called Saruhara hatched from Nkomokomo. In popular beliefs, this version is more of reality than a myth because Ngarama’s footsteps while he stretched out his arrow to kill the bird are until today noticeable",
    location:"Gatsibo , Easter Rwanda",
  },
  {
    id:19,
    district:"Gatsibo",
    name:"Utubindi twa Rubona",
    description:"It is a cultural site located in Tubindi Village, Rubona Cell, Kiziguro Sector, Gatsibo District. These utubindi were dug by Ruganzu at Rubona. At the time, he came from his aunt Nyabunyana in Karagwe (today in western part of Tanzania), and entered in Rwanda after crossing Akagera River and sojourned at Rubona. When they arrived there, Ruganzu and his men had no drink and were thirsty. Therefore, he took his magic spear, poked it into ground and drilled, one after another, 12 pot-shaped pits which were instantly full of water",
    location:"Gatsibo , Easter Rwanda",
  },
  {
    id:20,
    district:"Gatsibo",
    name:"Nyakayaga",
    description:"Ubukomane bwa Nyakayaga is a cuvette located in between two hills of Kiburara and Nyakayaga. It is in situated in Bukamane village, Bukamane cell, in Gitoki sector in Gatsibo district. The site is known in Rwanda’s history as an area for transhumance activities for local people, it served as well as a pavilion for migrants to or from Uganda. The site is well known in various traditional Rwandan songs",
    location:"Gatsibo , Easter Rwanda",
  },
  {
    id:21,
    district:"Gatsibo",
    name:"Humure",
    description:"Humure is an elevated hill between Nyagisozi and Kageyo in Gatsibo district. In ancient Rwanda, Humure was in historical region of Ubuganza, today in Kigabiro cell, Remera sector. Humure was former royal capital of King Kigeli IV Rwabugiri, but it was as well inhabitated by King Ruganzu II Ndoli whom named the site when he passed by and spent a night on the rock located at the place known as Ryanjero; there was a well water",
    location:"Gatsibo , Easter Rwanda",
  },
  {
    id:22,
    district:"Kayonza",
    name:"Mubari",
    description:"Mubari (or Umubari), as well known as mu Mazinga, is a historical region located in Eastern of Rwanda, today in Akagera National Park. Umubari was conquested by Rwanda under the reign of Cyirima II Rujugira, by his son Ndabarasa. At that time, Umubari was a kingdom ruled by King Biyoro and his queenmother Nyirabiyoro. In Rwandan history based on oral tradition, Umubari is most evoked in Ibimanuka legend, and the revelations of Nyirabiyoro",
    location:"Kayonza , Easter Rwanda",
  },
  {
    id:23,
    district:"Kirehe",
    name:"Sakara",
    description:"Sakara is located in Eastern Province, Ngoma District, Murama Sector, Sakara Cell, Urubare Village in Gisaka-Gihunya. There was one King Kigeri IV Rwabugiri’s residence at Sakara; the reason why the place was called Rwabugiri’s royal palace. Rwabugiri’s royal palace at Sakara was intended to help him carry out attacks against Gisaka. Although Rwanda had conquered Gisaka during the reign of King Mutara II Rwogera, it had not been able to capture their dynastic royal drum Rukurura. Rwabugiri later captures it upon orientation by one trustee of esoteric code in Gisaka named Kabaka son of Kayagiro. Bushubi was also attacked from the same royal palace. King Rwabugiri wished to offer his royal palace in Sakara to his beloved wife Kanjogera, but Mugugu refused. Therefore, Rwabugiri, who did not want to fight against his loyal friend Mugugu and his beloved wife Kanjogera, resolved to withdraw and surrender it to Mugugu",
    location:"Kirehe , Easter Rwanda",
  },
  {
    id:24,
    district:"Kirehe",
    name:" Rwabanyoro hill",
    description:"Nyamurindira Village, formerly in Gisaka Migongo. It is a well-known hill in the area, where many Banyoro died when they were trying to flee from the battle against Gisaka. It is further suspected that the attack took place at the same time as the Nyoro attacked Rwanda during the reign of King Mibambwe I Sekarongoro Mutabazi I. Nyamurindira was a cattle keeper, and kept a large number of cows on the hill named after him. After losing the battle, the Banyoro tried to flee, having captured Nyamurindira’s cows. When they reached the hill but under danger, the Banyoro fell into the existing steep cliff that would not be seen from the battle field",
    location:"Kirehe , Easter Rwanda",
  },
  {
    id:25,
    district:"Ngoma",
    name:"Cyasemakamba",
    description:"Ku Cyasemakamba is located in Cyasemakamba cell, Kibungo sector. The name comes from Chief Semakamba who might have occupied and ruled the place under the reign of Mutara II Rwogera after fighting with Gisaka kingdom. Semakamba planted a ficus tree at the place and the tree was used as a cover against sunlights for many travelers",
    location:"Ngoma , Easter Rwanda",
  },
  {
    id:26,
    district:"Ngoma",
    name:"Zaza",
    description:"Zaza is a cathoric church parish elected by Mgr Joseth Hirth on 1st November 1900. It started with three fathers known as Zumbiehl, Barthélémy and Pouget. It is the second mission created by Catholic Church after Save in February 1900.",
    location:"Ngoma , Easter Rwanda",
  },
  {
    id:29,
    district:"Nyagatare",
    name:"Ryamurari",
    description:"Located in Bufunda Village, Bufunda Cell, Mukama Sector, Nyagatare District; Ryamurari is one of prominent archaeological sites in Great Lakes Africa in general and Rwanda in particular. It was the royal capital of Ndorwa Kingdom before the latter was",
    location:"Nyagatare , Easter Rwanda",
  },
  {
    id:30,
    district:"Nyagatare",
    name:"Mutara III Rudahigwa’s house",
    description:"Mimuri is a site located in Rebero Village, Rugari Cell, Mimuri Sector, Nyagatare District. The site is a camp constructed by King Mutara III Rudahigwa during early 1950s. It is a cluster of five houses built with metal sheets. They served as hunting camp, a shelter to Rwandans who travelled to Uganda.",
    location:"Nyagatare , Easter Rwanda",
  },
  {
    id:31,
    district:"Rwamagana",
    name:"Ibigabiro bya Rwabugiri",
    description:"Ibigabiro are the trees that were surrounding the compound of a king, a wealthy chief with a lot of property that he would give part of it as a gift to particular person. Ibigabiro bya Rwabugiri today are the remains of those trees that are located in Bigabiro village",
    location:"Rwamagana , Easter Rwanda",
  },
  {
    id:32,
    district:"Rwamagana",
    name:"Nkungu na Munyaga",
    description:"Nkungu is located in historical region of Buganza. Today it is in Munyaga sector of Rwamagana district. The hill of Nkungu is known in Rwandan history following th of death of King Ruganzu I Bwimba who was killed there by Gisaka army in 15th century.",
    location:"Rwamagana , Easter Rwanda",
  },
  {
    id:33,
    district:"Gasabo",
    name:"Bumbogo bw’i Ngara",
    description:"Bumbogo bw’Ingara or Bumbogo of Nkuzuzu is at the top of Bumbogo hill, near Bumbogo Sector office, in Gasabo District. It used to be in Bwanacyambwe region, but after the Abanyiginya had conquered Busarasi region, they immediately called it Bumbogo, becoming their fiefdom. From Bumbogo, Prince Sekarongoro son of Kigeri ",
    location:"Gasabo , Kigali Rwanda",
  },
  {
    id:34,
    district:"Nyarugenge",
    name:"Ishuri ry’intwari",
    description:"The school “Intwari” is located in the City of Kigali, Abatarushwa Village, Rwezamenyo I Cell, Rwezamenyo Sector, Nyarugenge District, former Bwanacyambwe region. The school was built by Muslims in 1957 to provide the Muslim children with a school where they could learn freely in their faith. It is currently managed by Rwanda Muslim Community. During the colonial period, Muslim children had to take religious studies from other religions and were often required to be",
    location:"Nyarugenge , Kigali Rwanda",
  },
  {
    id:35,
    district:"Burera",
    name:"Urugezi",
    description:"Urugezi swamp is located in Burera district, Rwerere sector, in Bucondo cell. I Rwandan history, Urugezi is knwon as a refugee area for Basebya, son of Nyirantwari who resisted to the reign of King Yuhi V Musinga late in 19th century and beginning o 20th century.",
    location:"Burera , Northern Rwanda",
  },
  {
    id:36,
    district:"Gakenke",
    name:"Huro",
    description:"Huro is a hill located in Gakenke district, Muhondo sector. The site is represented by small pot inlayed into soil. Huro was the capital of Abiru (kingdom advisors) in charge of harvest ceremony",
    location:"Gakenke , Nothern Rwanda",
  },
  {
    id:37,
    district:"Gicumbi",
    name:"Rutare",
    description:"Rutare hill is located in Nyakavunga cell, in Rutare sector, in Gicumbi district. In past Rutare was located in historical region of Ubuganza. Before the colonial era, Rutare was used as graveyard for Rwandan kings and queenmother dead due to natural cause. ",
    location:"Gicumbi , Northern Rwanda",
  },
  {
    id:38,
    district:"Musanze",
    name:"Ishyamba Buhanga",
    description:"Buhanga is a natural forest that was inhabited by King Gihanga. In aftermath of Gihanga’s reign, the forest was used to organise traditional ceremonies related to Rwanda’s monarchy",
    location:"Musanze , Northern Rwanda",
  },
  {
    id:39,
    district:"Rulindo",
    name:"Butangampundu hill is known as a graveyard for kings and queen mothers dead due todent, suicide, or killed by enemy.",
    description:"Urutare rwa Ngarama is a cultural site located in Ngarama sector, Gatsibo District. There are three versions of oral traditions about it, and all converge on the incidence occurring on that rock and from which it got the name. In a version which is more popular across the country, Urutare rwa Ngarama represents a mythical hero, Ngarama, a strong man who fought and killed a dangerous eagle called Saruhara hatched from Nkomokomo. In popular beliefs, this version is more of reality than a myth because Ngarama’s footsteps while he stretched out his arrow to kill the bird are until today noticeable",
    location:"Rulindo , Northern Rwanda",
  },
  {
    id:40,
    district:"Rulindo",
    name:"Ku Kirenge cya Ruganzu",
    description:"Ku Kirenge cya Ruganzu (Ruganzu’s foot) is located in Kabuye village, Kirenge cell, in Rusiga sector. It’s said that there was a foot of King Ruganzu engraved into a rock. This was destroyed in 1980s when the road Kigali – Musanze was under construction",
    location:"Rulindo ,Northern Rwanda",
  },
  {
    id:41,
    district:"Gisagara",
    name:"Utwicarabami twa Nyaruteja",
    description:"Nyaruteja is located in Southern Province, Gisagara District, Nyanza Sector, Higiro Cell, Akabakene Village, formerly Mvejuru region. The name Nyaruteja was promoted by King Mutara I Semugeshi as a name that would make possible the conquest of Burundi. The kings of Rwanda used to give to some bordering areas common names in the country in terms of victories. Nyaruteja was the name of a bridge on Nyabarongo, connecting Kigali with Nduga. Thus, Semugeshi was indicating that he would cross over to Nyaruteja and take over Burundi, just as the Rwandans had crossed over to Nyaruteja and taken over Nduga. The non-aggression agreement between Rwanda and Burundi was concluded during the reign of King Mutara I Semugeshi. ",
    location:"Gisagara , Southern Rwanda",
  },
  {
    id:42,
    district:"Huye",
    name:"Ibisi bya Huye",
    description:"They are located in five villages namely Gatongati, Kigarama, Kinyinya, Kimana and Gako of Nyakagezi Cell, Huye Sector, Huye District, Southern Province. It is in former Bwanamukari region. Ibisi bya Huye are made of a range of high mountains. The most famous narrative about Huye Mountains is about how King Ruganzu II Ndori wisely defeated Nyagacyecuru, who was the petty queen of of Huye Mountains. Ruganzu II Ndoli thought that he could not fight her with his troops as usual. Instead, he deceived her into offering her goats, which grazed the acanthus pubescens thorns; and once the thorns were exhausted, the frightening python moved away. Thus, Nyagakecuru remained without deprived of protection, and then King Ruganzu II Ndori and his Ibisumizi troops invaded and defeated her",
    location:"Huye , Southern Rwanda",
  },
  {
    id:43,
    district:"Kamonyi",
    name:"Ijuru rya Kamonyi",
    description:"There was a capital of King Yuhi III Mazimpaka, currently located in Juru Village, Nkingo Cell, Gacurabwenge Sector, Kamonyi District, Southern Province; formerly in Rukoma region. Mazimpaka reportedly had a tall house called Umuturirwa (Sky scrapper) in the area. Once King Mazimpaka reportedly stood on the roof of his umuturirwa, looking at the rock below it, he thought it was a lake. He then walked down to the rock, breaking his leg. His servants and trustees of the dynastic esoteric code rushed him from Kamonyi so that he would not die there, which could cause bad omen to the kings who would succeed him. He later died in Nkingo Valley that had been called so from the reign of Cyirima I Rugwe",
    location:"Kamonyi , Southern Rwanda",
  },
  {
    id:44,
    district:"Kamonyi",
    name:"Ibitare bya Mashyiga",
    description:"Mashyiga Rocks are located in Southern Province, Kamonyi District, Karama Sector, Bitare Cell, Kokobe Village. It is an area formerly known as Gishubi (Rukoma). They are many glittering rocks, some placed on top of others like a pot on a traditional cooking stove, which brought about the name of Ibitare bya Mashyiga (Mashyiga rocks). ",
    location:"Kamonyi , Southern Rwanda",
  },
  {
    id:45,
    district:"Muhanga",
    name:"Rucunshu",
    description:"Rucunshu is a historical heritage site. It is located in former Marangara region, currently in Rubuye Village, Mbare Cell, Shyogwe Sector, Muhanga District, Southern Province. After the death of King Kigeri IV Rwabugiri, Rucunshu experienced a war of succession between the followers of Mibambwe IV Rutarindwa who had inherited the throne from his father on the one hand; and the followers of the king to be Yuhi V Musinga, on the other hand. There is currently no evidence of the incident, but residents point out that King Mibambwe IV Rutarindwa’s former residence and place of death are located in farm owned by Habumuremyi Félicien",
    location:"Muhanga , Southern Rwanda",
  },
  {
    id:46,
    district:"Nyamagabe",
    name:"Ibisi bya Nyamagabe",
    description:"Nyamagabe Mountains are composed of a range of high and steep mountains. The mountains were formerly known as a den of hyenas, jackals, and hares. The mountains are still covered by a dense forest. They range from Huye District, an area known as Huye Mountains (Ibisi bya Huye) to Nyamagabe District, where they are called Nyamagabe Mountains. The mountains extend to Nyungwe National Park. One of the most famous mountains is Kanyamagabe, which is said to have originated the name of Nyamagabe given to the district.",
    location:"Nyamagabe , Southern Rwanda",
  },
  {
    id:47,
    district:"Nyanza",
    name:"Mwima",
    description:"Mwima is located in former Nduga region, and currently in Rukari Village, Rwesero Cell, Busasamana Sector, Nyanza District, Southern Province. Mwima is well-known as a mausoleum. Since January 2017, it has three tombs: the tomb of King Rudahigwa, the tomb of Queen Rosalie Gicanda and the one of King Kigeri V Ndahindurwa, died in 2016 and buried on15/01/2017",
    location:"Nyanza , Southern Rwanda",
  },
  {
    id:48,
    district:"Nyanza",
    name:"Butansinda",
    description:"Kigoma and Muyange are two hills located in Southern Province, Nyanza District, Kigoma Sector, Butansinda Cell, Butansinda Village; former Northern Gusanza region. The area is where King Ruganzu II Ndori’s Ibisumizi military formation, struck one another until they all died, imitating the former king’s cupbearer named Rusenge. Rusenge had already committed suicide after his master, King Ruganzu II Ndori had died.",
    location:"Nyanza , Southern Rwanda",
  },
  {
    id:49,
    district:"Nyanza",
    name:"Gakenyeri kwa Musinga",
    description:"Gakenyeri is located in Nyanza and used to be the capital of King Yuhi IV Musinga and Queen mother Nyirayuhi Kanjogera. It is currently in Gakenyeri Village, Nyanza Cell, Busasamana Sector, Nyanza District. In 1899, Musinga moved from Mwima and established his capital across from Nyanza in Gakenyeri. From since ever, Nyanza became the capital where the kings of Rwanda lived without moving until the monarchy came to an end in 1961.",
    location:"Nyanza , Southern Rwanda",
  },
  {
    id:50,
    district:"Nyanza",
    name:"Rwesero",
    description:"It has a long history since it used to be capital of Nduga kingdom ruled by the Ababanda Clan, and there was a famous witch and king of Nduga, Mashira son of Sabugabo. Rwesero is also known in the history as Rwesero of the Abagereka Clan. On Rwesero Hill, there is currently one of the Museums accommodated in King Mutara III Rudahigwa’s house that was intended to be his royal palace.",
    location:"Nyanza , Southern Rwanda",
  },
  {
    id:51,
    district:"Ruhango",
    name:"Urutare rwa Kamegeri",
    description:"Kamegeri Rock (Urutare rwa Kamegeri) is located in Southern Province, Ruhango District, Ruhango Sector, Rwoga Cell, Kabambati Village. It is a rock on the outskirts of Ruhango town closer to Ruhango-Nyanza main road, in former Nduga region. The rock is reminiscent of the history of Chief Kamegeri who lived during the reign of King Mibambwe II Sekarongoro II Gisanura who also lived nearby on Mutakara Hill. Kamegeri died cremated on the rock after giving a cruel recommendation on a penalty that would be inflicted on the offenders to the king",
    location:"Ruhango , Southern Rwanda",
  },
  {
    id:52,
    district:"Karongi",
    name:"Ibigabiro bya Rubengera",
    description:"Rubengera is located in Kigabiro Village, Gisanze Cell, Rubengera Sector, Karongi District, Western Province in the former Ubwishaza region. Rubengera has been famous in the history of Rwanda since the 19th century, when King Kigeri IV Rwabugiri established his capital the area in 1874 on his return from the battle in Butembo (currently in the Democratic Republic of Congo) for the Batembo people in Bunyakiri region, near Bukavu. Rubengera is also the capital where the king celebrated the national harvest feast ceremonies seven times. The ceremonies took place in 1874, 1875, 1879, 1880, 1881, 1891, and 1892.",
    location:"Karongi , Western Rwanda",
  },
  {
    id:53,
    district:"Ngororero",
    name:"Ndaba Rock",
    description:"Urutare rwa Ndaba is located in Rusebeya Village, Gitwa Cell, Rubengera Sector, Karongi District, Western Province in former Bwishaza region. It is a very deep rock seen from above on which a river flows down; called Ndaba waterfall. Both, the rock and the river were named after Ndaba, who lived on the top hill, the upper side of the rock in Ntobo. The significance of this site is related to the death of Ndaba who had gone to harvest honey from the rock with his friends. ",
    location:"Ngororero , Western Rwanda",
  },
  {
    id:54,
    district:"Ngororero",
    name:"Rubi rw’i Nyundo",
    description:"Rubi rw’ i Nyundo is located at Rugarama Hill, in Bushyogero Village, Cyahafi Cell, Bwira Sector, Ngororero District, Western Province in the former Cyingogo region. Rubi rw’ i Nyundo is a historical site because it is where King Ndahiro II Cyamatare died under a pygeum tree. It is believed that the tree existed before 1952. People began to cultivate near around it in the late 90’s. The tree used to provide travellers and hunters with sticks! Currently, there is not any remnant of that pygeum tree.",
    location:"Ngororero , western Rwanda",
  },
  {
    id:55,
    district:"Ngororero",
    name:"Miko y’abakobwa",
    description:"Imiko y’abakobwa is located in Rusenyi Village, Mukore Cell, Kageyo Sector, Ngororero District, Western Province in the former Cyingogo region. Imiko y’abakobwa (Erythrins of noble ladies) is a historic site because it is the place where the queen mother and queens were killed after the death of King Ndahiro II Cyamatare. ",
    location:"Ngororero , Western Rwanda",
  },
  {
    id:56,
    district:"Ngororero",
    name:"Umukore wa Rwabugiri",
    description:"Kageyo is a high hill in Nyamatanga Village, Mukore Cell, Kageyo Sector, Ngororero District, Western Province in the former Cyingogo region. It’s where King Kigeri IV Rwabugiri had established his capital at the top of the hill. The former place of Rwabugiri’s palace in Kageyo was named Ku Mukore wa Rwabugiri after the pear tree (dombeya goetzenii) that used to be there. It is believed that the pear tree had been in place, not until the last one to be seen was uprooted around 1978. In ancient Rwanda, the tree was of great importance: its leaves were mostly used in covering wooden containers of milk; and serving as hygienic materials",
    location:"Ngororero , Western Rwanda",
  },
  {
    id:57,
    district:"Nyabihu",
    name:"Ibere rya Bigogwe",
    description:"Ibere rya Bigogwe is located in Bigogwe, Marero Village Nyamirango Cell Kanzenze Sector, Rubavu District, Western Province. It is a natural heritage site. From the main tarmac road from Kigali to Rubavu, ibere rya Bigogwe is on left not far from Bigogwe Sector Office in Nyabihu District. It is a hill made up of a large bare rock over Kanzenze Genocide Memorial monument, and the top hill is covered with eucalyptus trees. The crag is shaped like a breast!",
    location:"Nyabihu , Western Rwanda",
  },
  {
    id:58,
    district:"Nyamasheke",
    name:"Akarwa k'abakobwa",
    description:"Akarwa k’Abakobwa is located in Gikuyu Village, Ninzi Cell, Kagano Sector, Nyamasheke District, in former Kinyaga region. Pregnant girls from this region were expelled to that an islet in Kivu Lake. Due to the large number of girls expelled to that island and hence the name Akarwa k’Abakobwa (islet for ladies)",
    location:"Nyamasheke , Western Rwanda",
  },
  {
    id:59,
    district:"Nyamasheke",
    name:"Ibigabiro bya Rwabugir",
    description:"Ibigabiro bya Rwabugiri I Nyamasheke is located in Gikuyu Village, Ninzi Cell, Kagano Sector, Nyamasheke District, Western Province. King Kigeri IV Rwabugiri ruled Rwanda from 1853 to 1895 and had many capitals in the country. One of the bordering Rwabugiri’s capitals was in Kinyaga at Mataba in Nyamasheke, built for preparation to attack Ijwi and Ubunyabungo",
    location:"Nyamasheke , Western Rwanda",
  },
  {
    id:60,
    district:"Nyamasheke",
    name:"Bushenge",
    description:"Bushenge is located in Impala Cell, Bushenge Sector, Nyamasheke District, Western Province in former Impala area, Kinyaga region. Archaeological research discovered that people in Kinyaga smelted iron ore to extract the metal. The monuments were discovered on the top of Bushenge hill in ButareBushenge. Recent research in the region has unequivocally proved that there were Kinyaga residents who smelted iron ore to make metal tools before the colonial period. Smelting furnace monuments in Kinyaga were first discovered in Bushenge in 2011. In the same year, local blacksmiths tried to practically show to the researcher how iron ore was smelted. Archaeological excavations done by researchers in 2015 provisionally revealed that there were smelting activities in the 18th or 19th century",
    location:"Nyamasheke , Western Rwanda",
  },
  {
    id:61,
    district:"Rubavu",
    name:"Nengo",
    description:"Nengo Mountain (Umusozi wa Nengo) is located Kamayugi Village, Rubavu Cell, Gisenyi Sector, Rubavu District, Western Province in former Bugoyi region. On top of Nengo hill, there was a German military base during World War I. Also there were artillery and soldiers who combatted the Belgians in Kibati in the Democratic Republic of Congo. The German army was assisted by Rwandan troops called Indugaruga.",
    location:"Rubavu , Western Rwanda",
  },
  {
    id:62,
    district:"Rutsiro",
    name:"Akabira kabi ka Syiki",
    description:"Akabira kabi ka Shyiki is located near Nkomero commercial settlement, between Rwumba Village and Syiki Village, in Murambi Cell, Musasa Sector, Rutsiro District, Western Province between former Bugoyi region and Kanage region. It is on the shores of Lake Kivu. It is a place where King Ruganzu II Ndori fought against Katabirora son of Kaborogoto from the Bashi clan. During the fight, its believed that King Ndori did not kill Katabirora, but rather Muvunyi son of Karema did. ",
    location:"Rutsiro , Western Rwanda",
  },
];

const districts = [
  "Nyarugenge",
  "Gasabo",
  "Kicukiro",
  "Huye",
  "Musanze",
  "Ruhango",
  "Kamonyi",
  "Nyamagabe",
  "Muhanga",
  "Rubavu",
  "Nyabihu",
  "Rutsiro",
  "Gakenke",
  "Gicumbi",
  "Karongi",
  "Gisagara",
  "Rwamagana",
  "Gatsibo",
  "Nyagatare",
  "Kirehe",
  "Ngoma",
  "Burera",
  "Nyanza",
  "Nyaruguru",
  "Rusizi",
  "Nyamasheke",
  "Bugesera",
  "Kayonza",
  "Rulindo",
  "Ngororero",
];

const OurToursPage = () => {
  const [selectedtour, setselectedtour] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState(""); // Track the selected district

  const handleBooking = (tour) => {
    setselectedtour(tour);
    setIsOpen(true);
  };

  const filteredTours = selectedDistrict
    ? tours.filter((tour) => tour.district === selectedDistrict)
    : tours;

  const [showMore, setShowMore] = useState({}); // State to handle "view more" toggle for descriptions

  const toggleDescription = (id) => {
    setShowMore((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const truncateDescription = (description) => {
    const maxLength = 100; // Set the max length of the description
    return description.length > maxLength ? description.slice(0, maxLength) + "..." : description;
  };

  return (
    <div>
      {isOpen ? (
        <BookingForm selectedTour={selectedtour} />
      ) : (
        <div className="container mx-auto py-12">
          <h1 className="text-3xl font-bold text-center mb-10 text-green-600">
            Our Tours
          </h1>

          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center">
              <h3 className="text-xl font-semibold text-gray-700 mr-4">
                Filter by District
              </h3>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full sm:w-72 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select District</option>
                {districts.map((district, index) => (
                  <option key={index} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-gray-500 font-medium">
              {filteredTours.length} tour(s) found
            </div>
          </div>

          {filteredTours.length === 0 ? (
            <div className="text-center text-gray-700">
              <FaRegSadCry className="text-6xl text-gray-200 mb-4 mx-auto" />
              <p className="text-xl font-semibold">
                No tours found in this district
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {filteredTours.map((tour) => (
                <motion.div
                  key={tour.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={tour.image ? tour.image : handicraft}
                    alt={tour.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-green-600">
                      {tour.name}
                    </h2>
                    <p className="text-sm text-gray-500 my-2 flex items-center">
                      <FaMapMarkerAlt className="mr-2 text-green-600" />
                      {tour.location}
                    </p>
                    <p className="text-gray-700">
                      {showMore[tour.id]
                        ? tour.description
                        : truncateDescription(tour.description)}
                    </p>
                    <button
                      onClick={() => toggleDescription(tour.id)}
                      className="text-green-600 mt-2 inline-block text-sm"
                    >
                      {showMore[tour.id] ? "View Less" : "View More"}
                    </button>
                    <div className="mt-4 flex justify-center">
                      <motion.button
                        onClick={() => handleBooking(tour)}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center bg-orange-300 text-white px-4 py-2 rounded-lg hover:bg-orange-400 focus:outline-none"
                      >
                        <FaCalendarAlt className="mr-2" />
                        Book Tour
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default OurToursPage;



