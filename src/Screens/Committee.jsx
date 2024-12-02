import React from "react";
import "../styles/Committee.css";
import patron1 from "../img/Committee/kk  sir.png";
import organizingChair1 from "../img/Committee/Guru D S.jpeg";
import organizingSecretary1 from "../img/Committee/Archana M. Rajurkar.jpeg";
import programChairs1 from "../img/Committee/Vinay Kumar Nataraja.jpeg";
import programChairs2 from "../img/Committee/Venkat N. Gudivada.png";
import generalChairs2 from "../img/Committee/Dr. Geeta S. Lathkar.jpg";
import generalChairs4 from "../img/Committee/Nagabhushan P.png";
import organizingCommittee1 from "../img/Committee/Joshi M. Y.jpeg";
import organizingCommittee2 from "../img/Committee/A S Hashmi.jpeg";
import organizingCommittee3 from "../img/Committee/Salve S. G..jpeg";
import organizingCommittee4 from "../img/Committee/Kapre B. S..jpeg";
import organizingCommittee5 from "../img/Committee/Md. Aijaz Ahmed.jpeg";
import organizingCommittee6 from "../img/Committee/Pawar P. P..jpeg";
import organizingCommittee7 from "../img/Committee/Wagre S. S..jpeg";
import organizingCommittee8 from "../img/Committee/Pariyal N. P..jpeg";
import organizingCommittee9 from "../img/Committee/Aghor D. B..jpeg";
import organizingCommittee10 from "../img/Committee/Chennoji M. R..jpeg";
import organizingCommittee11 from "../img/Committee/Bisen R. G., India.jpeg";
import organizingCommittee12 from "../img/Committee/Kale J. S..jpeg";
import organizingCommittee13 from "../img/Committee/Pande N. S..jpeg";
import organizingCommittee14 from "../img/Committee/Bhandare M. N..jpeg";
import organizingCommittee15 from "../img/Committee/J H Patil.jpeg";
import organizingCommittee16 from "../img/Committee/SY Gaikwad.jpeg";

const patrons = [
  {
    name: "Shri. Kamalkishor Kadam",
    image: patron1,
  },
];

const organizingChair = [
  {
    name: "Dr. Guru D S",
    image: organizingChair1,
  },
  {
    name: "Dr. Archana M. Rajurkar",
    image: organizingSecretary1,
  },
];

// const organizingSecretary = [
//   {
//     name: "Dr. Archana M. Rajurkar",
//     image: organizingSecretary1,
//   },
// ];

const programChairs = [
  {
    name: "Vinay Kumar Nataraja",
    image: programChairs1,
  },
  {
    name: "Venkat N. Gudivada",
    image: programChairs2,
  },
];

const generalChairs = [
  {
    name: "Dr. Geeta S. Lathkar",
    image: generalChairs2,
  },
  {
    name: "Dr. Nagabhushan P",
    image: generalChairs4,
  },
];

const organizingCommittee = [
  {
    name: "Mr. Hashmi S.A.",
    image: organizingCommittee2,
  },
  {
    name: "Ms. Jyoti H. Patil",
    image: organizingCommittee15,
  },
  {
    name: "Dr. Joshi M. Y",
    image: organizingCommittee1,
  },

  {
    name: "Mr. Salve S. G",
    image: organizingCommittee3,
  },
  {
    name: "Dr. Kapre B. S",
    image: organizingCommittee4,
  },
  {
    name: "Dr. S Y Gaikwad",
    image: organizingCommittee16,
  },
  {
    name: "Mr. Md. Aijaz Ahmed",
    image: organizingCommittee5,
  },
  {
    name: "Mr. Pawar P. P",
    image: organizingCommittee6,
  },
  {
    name: "Ms. Wagre S. S",
    image: organizingCommittee7,
  },
  {
    name: "Ms. Pariyal N. P",
    image: organizingCommittee8,
  },
  {
    name: "Aghor D. B",
    image: organizingCommittee9,
  },
  {
    name: "Mr. Chennoji M. R",
    image: organizingCommittee10,
  },
  {
    name: "Mr. Bisen R. G",
    image: organizingCommittee11,
  },
  {
    name: "Ms. Kale J. S",
    image: organizingCommittee12,
  },
  {
    name: "Ms. Pande N. S",
    image: organizingCommittee13,
  },
  {
    name: "Mr. Bhandare M. N",
    image: organizingCommittee14,
  },
];

const advisoryPanelItems = [
  "D. B. Phatak, India",
  "V. N. Gudivada, USA",
  "KC Santosh, USA",
  "Jose J, Scotland",
  "Kanakanahalli M, Singapore",
  "Kirthiga Reddy, USA",
  "Koen De Bosschere, Belgium",
  "Leedham G, Australia",
  "Punitha P, United Kingdom",
  "Vallet D, Spain",
  "Anirudh Joshi, India",
  "Anupam Agrawal, India",
  "S. Murala, India",
  "Kokre M. B., India",
  "Hemantha Kumar G., India",
  "Lalit Kumar Awasthi, India",
  "Mayank Dave, India",
  "Mohit P. Tahiliani, India",
  "Bhirud, India",
  "Murthy M N, India",
  "N.Ch.Sriman Narayana Iyengar, India",
  "Nagendraswamy H S, India",
  "Rajendra Hegadi, India",
  "Ram Murthy Garimella, India",
  "Ramakrishnan A G, India",
  "Somayajulu,DVLN, India",
  "Srinivas Gosala, India",
  "Vasudev T, India",
];
const advisoryPanelItems1 = [
  "D. B. Phatak, India",
  "V. N. Gudivada, USA",
  "KC Santosh, USA",
  "Jose J, Scotland",
  "Kanakanahalli M, Singapore",
  "Kirthiga Reddy, USA",
  "Koen De Bosschere, Belgium",
];

const advisoryPanelItems2 = [
  "Leedham G, Australia",
  "Punitha P, United Kingdom",
  "Vallet D, Spain",
  "Anirudh Joshi, India",
  "Anupam Agrawal, India",
  "S. Murala, India",
  "Kokre M. B., India",
];

const advisoryPanelItems3 = [
  "Hemantha Kumar G., India",
  "Lalit Kumar Awasthi, India",
  "Mayank Dave, India",
  "Mohit P. Tahiliani, India",
  "Bhirud, India",
  "Murthy M N, India",
  "N.Ch.Sriman Narayana Iyengar, India",
];

const advisoryPanelItems4 = [
  "Nagendraswamy H S, India",
  "Rajendra Hegadi, India",
  "Ram Murthy Garimella, India",
  "Ramakrishnan A G, India",
  "Somayajulu,DVLN, India",
  "Srinivas Gosala, India",
  "Vasudev T, India",
];

const steeringCommitteeItems = [
  "Amitava Das, India",
  "Pal U, India",
  "Rajendra Prasath, Norway",
  "Shekar B H, India",
  "Vishwanath P, India",
];

const programCommitteeItems = [
  "Ahlame Chouakria Douzali, France",
  "Andreas Dengel, Germany",
  "Arun A Ross, USA",
  "Bhanu Prasad, USA",
  "Blumenstein, Australia",
  "Du-Ming Tsai, Taiwan",
  "Francesc J Ferri, Spain",
  "Graham Leedham, Australia",
  "Jemal Abawajy, Australia",
  "Joseph Liados, France",
  "Juergen Abel, Germany",
  "Karthik Nandakumar, Singapore",
  "Manoj V. N. V, Ethiopia",
  "Mohan S Kanakanahalli, Singapore",
  "Morteza Marzarani, USA",
  "Mireille Summa, Paris",
  "Mohammed Kamel, USA",
  "Raghavendra R, Norway",
  "Kiranagi B B, USA",
  "Naresh Y G, Ireland",
  "Rosanna Verde, Italy",
  "Santhoshkumar V, UAE",
  "Saragur N Srihari, USA",
  "Saritha Arunkumar, UK",
  "Shivakumara P, UK",
  "Shreekanta Prakash H N, USA",
  "Sudeep Sarkar, USA",
  "Tabbone S, France",
  "Anami B S, India",
  "Anand Kumar K R, India",
  "Anantha Narayana V S, India",
  "Angadi S A, India",
  "Anil Kumar, India",
  "Annappa, India",
  "Anoop M Namboodiri, India",
  "Anshu S Anand, India",
  "Antony P J, India",
  "Aradhya V N M, India",
  "Archana M R, India",
  "Arun Agarwal, India",
  "Ashwatha Kumar, India",
  "Balachandra, India",
  "Bhat P.V, India",
  "Biswas P K, India",
  "Brijesh Iyer, India",
  "Chanda B, India",
  "Chennamma H R, India",
  "Chethan H K, India",
  "Chethana Kumara B M, India",
  "Deepa Deshpande, India",
  "Dhandra B V, India",
  "Dinesh R, India",
  "Ganesh Aithal, India",
  "Girish Chowdhary, India",

  "Gopalakrishna N Kini, India",
  "Hanmandulu M, India",
  "Harish B S, India",
  "Harisha K S, India",
  "Imran M, India",
  "Jagadeesh Prabhu, India",
  "Jagannathan S, India",
  "Jalesh, India",
  "Jharna Majumdhar, India",
  "Joshi Y V, India",
  "Jyothi Shetty, India",
  "K.P. Singh, India",
  "Karthik Pai B H, India",
];

const programCommitteeItems2 = [
  "Kavitha, India",
  "Kiwalekar, A W, India",
  "Linganagouda Kulkarni, India",
  "Mahadev Prasanna, India",
  "Mahamad Suhil, India",
  "Mahesh Prasanna, India",
  "Mallikarjuna P B, India",
  "Manish Kumar, India",
  "Manjunath S S, India",
  "Manjunath S, India",
  "Manjunatha K S, India",
  "Manohar N, India",
  "Manohar Pai M M, India",
  "Manthalkar, R R, India",
  "Mayank Vasta, India",
  "Meenakshi, India",
  "Mohan Kumar H P, India",
  "Nagabhushan T N, India",
  "Nagappa U Bhajantri, India",
  "Nagasundar K B, India",
  "Nagesh H R, India",
  "Narayanan N K, India",
  "Nirmala S, India",
  "Pavitra Bhade, India",
  "Pradeep Kumar R, India",
  "Prakash H N, India",
  "Prasad B G, India",
  "Prasanna Kumar H R, India",
  "Preethi M, India",
  "Raghavendra Achar, India",
  "Raghavendra Rao G, India",
  "Raju G, India",
  "Raju, G T, India",
  "Ramakrishnan K R, India",
  "Ramar K, India",
  "Ramesh Babu, India",
  "Ravat Awale, India",
  "Ravi T V, India",
  "Ravikumar M, India",
  "Ravishankar, India",
  "Revathi K, India",
  "Roshan Fernandes, India",
  "Sahana D Gowda, India",
  "Sanjay Pandey, India",
  "Satish Singh, India",
  "Shankar Nair A, India",
  "Sharad Sinha, India",
  "Shiv Ram, Dubey, India",
  "Shivamurthy H G, India",
  "ShrikantaMurthy K, India",
  "Soumya A, India",
  "Sridhar V, India",
  "Srikanta Prakash H N, India",
  "Subbareddy N V, India",
  "Subhadip Basu, India",
  "Sumith N, India",
  "Sumitha Basu, India",
  "Suraj M G, India",
  "Suresh P, India",
  "Suryakanth V Gangashetty, India",
  "T.G.Basavaraju, India",
  "Varsha Patil, India",
  "Venugopala P S, India",
  "Vijaya P, India",
  "Vimuktha E J, India",
  "Wahi A, India",
  "Yuvaraju B N, India",
];

const programCommitteeItemsPart1 = [
  "Ahlame Chouakria Douzali, France",
  "Andreas Dengel, Germany",
  "Arun A Ross, USA",
  "Bhanu Prasad, USA",
  "Blumenstein, Australia",
  "Du-Ming Tsai, Taiwan",
  "Francesc J Ferri, Spain",
  "Graham Leedham, Australia",
  "Jemal Abawajy, Australia",
  "Joseph Liados, France",
  "Juergen Abel, Germany",
  "Karthik Nandakumar, Singapore",
  "Manoj V. N. V, Ethiopia",
  "Mohan S Kanakanahalli, Singapore",
  "Morteza Marzarani, USA",
  "Mireille Summa, Paris",
  "Mohammed Kamel, USA",
  "Raghavendra R, Norway",
  "Kiranagi B B, USA",
  "Naresh Y G, Ireland",
  "Rosanna Verde, Italy",
  "Santhoshkumar V, UAE",
  "Saragur N Srihari, USA",
  "Saritha Arunkumar, UK",
  "Shivakumara P, UK",
  "Shreekanta Prakash H N, USA",
  "Sudeep Sarkar, USA",
  "Tabbone S, France",
];

const programCommitteeItemsPart2 = [
  "Anami B S, India",
  "Anand Kumar K R, India",
  "Anantha Narayana V S, India",
  "Angadi S A, India",
  "Anil Kumar, India",
  "Annappa, India",
  "Anoop M Namboodiri, India",
  "Anshu S Anand, India",
  "Antony P J, India",
  "Aradhya V N M, India",
  "Archana M R, India",
  "Arun Agarwal, India",
  "Ashwatha Kumar, India",
  "Balachandra, India",
  "Bhat P.V, India",
  "Biswas P K, India",
  "Brijesh Iyer, India",
  "Chanda B, India",
  "Chennamma H R, India",
  "Chethan H K, India",
  "Chethana Kumara B M, India",
  "Deepa Deshpande, India",
  "Dhandra B V, India",
  "Dinesh R, India",
  "Ganesh Aithal, India",
  "Girish Chowdhary, India",
  "Gopalakrishna N Kini, India",
];

const programCommitteeItemsPart3 = [
  "Hanmandulu M, India",
  "Harish B S, India",
  "Harisha K S, India",
  "Imran M, India",
  "Jagadeesh Prabhu, India",
  "Jagannathan S, India",
  "Jalesh, India",
  "Jharna Majumdhar, India",
  "Joshi Y V, India",
  "Jyothi Shetty, India",
  "K.P. Singh, India",
  "Karthik Pai B H, India",
  "Kavitha, India",
  "Kiwalekar, A W, India",
  "Linganagouda Kulkarni, India",
  "Mahadev Prasanna, India",
  "Mahamad Suhil, India",
  "Mahesh Prasanna, India",
  "Mallikarjuna P B, India",
  "Manish Kumar, India",
  "Manjunath S S, India",
  "Manjunath S, India",
  "Manjunatha K S, India",
  "Manohar N, India",
  "Manohar Pai M M, India",
  "Manthalkar, R R, India",
  "Mayank Vasta, India",
  "Meenakshi, India",
];
const programCommitteeItemsPart4 = [
  "Mohan Kumar H P, India",
  "Nagabhushan T N, India",
  "Nagappa U Bhajantri, India",
  "Nagasundar K B, India",
  "Nagesh H R, India",
  "Narayanan N K, India",
  "Nirmala S, India",
  "Pavitra Bhade, India",
  "Pradeep Kumar R, India",
  "Prakash H N, India",
  "Prasad B G, India",
  "Prasanna Kumar H R, India",
  "Preethi M, India",
  "Raghavendra Achar, India",
  "Raghavendra Rao G, India",
  "Raju G, India",
  "Raju, G T, India",
  "Ramakrishnan K R, India",
  "Ramar K, India",
  "Ramesh Babu, India",
  "Ravat Awale, India",
  "Ravi T V, India",
  "Ravikumar M, India",
  "Ravishankar, India",
  "Revathi K, India",
  "Roshan Fernandes, India",
  "Sahana D Gowda, India",
  "Sanjay Pandey, India",
  "Satish Singh, India",
];


const CommitteeBox = ({ title, members }) => {
  return (
    <div className="committeeBox">
      <div className="committeeBoxMembers">
        {members.map((member, index) => (
          <div className="committeeBoxMember" key={index}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
          </div>
        ))}
      </div>
      <h2 className="committeeTitle">{title}</h2>
    </div>
  );
};

const CommitteeList = ({ title, items}) => {
  // Determine if the title should appear above the list
  

  return (
    <div className="committeeBoxList">
      

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="committeeTitle">{title}</h2>
    </div>
  );
};


const CommitteeList2 = ({ title, items1, items2 , items3, items4}) => {
  return (
    <div className="committeeBoxList2">
      <div className="biglist">
        <ul>
          {items1.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul>
          {items2.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul>
          {items3.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul>
          {items4.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <h2 className="committeeTitle">{title}</h2>
      <hr />
    </div>
  );
};

const Committee = () => {
  return (
    <div className="Committee">
      <h1>Committee</h1>

      <CommitteeBox title="Patron" members={patrons} />
      <CommitteeBox title="Organizing Chairs " members={organizingChair} />

      <CommitteeBox title="Program Chairs" members={programChairs} />
      <CommitteeBox title="General Chairs" members={generalChairs} />
      <CommitteeBox
        title="Organizing Committee"
        members={organizingCommittee}
      />

      <div className="twocolumn">
        <CommitteeList2 title="Advisory Committee" items1={advisoryPanelItems1}
        items2={advisoryPanelItems2}
        items3={advisoryPanelItems3}
        items4={advisoryPanelItems4}
        />
        <CommitteeList
          title="Steering Committee"
          items={steeringCommitteeItems}
        />
        <CommitteeList2
          title="Program Committee"
          items1={programCommitteeItemsPart1}
          items2={programCommitteeItemsPart2}
          items3={programCommitteeItemsPart3}
          items4={programCommitteeItemsPart4}
        />
      </div>
    </div>
  );
};

export default Committee;
