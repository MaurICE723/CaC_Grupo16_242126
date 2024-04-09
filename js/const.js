const parks = [
  {
    id: "1",
    name: "Parque Indoamericano",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9281.979954590246!2d-58.470674785571205!3d-34.66289759145483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccbe221cace7f%3A0xbd5ed689ede56280!2sParque%20Indoamericano!5e0!3m2!1sen!2sar!4v1712617303614!5m2!1sen!2sar",
  },
  {
    id: "2",
    name: "Parque de la ciudad",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6562.534353826447!2d-58.449274349580804!3d-34.67320575245422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccbf0fc1dd0e9%3A0x565d4c2fcbf1d5e0!2sCity%20Park!5e0!3m2!1sen!2sar!4v1712616307187!5m2!1sen!2sar",
  },
  {
    id: "3",
    name: "Parque Avellaneda",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13128.916919493195!2d-58.480457760891795!3d-34.64891340342138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc99e9073e7d1%3A0xb1f7ebd8f90c9d57!2sParque%20Avellaneda!5e0!3m2!1sen!2sar!4v1712617885140!5m2!1sen!2sar",
  },
  {
    id: "4",
    name: "Parque la Isla de la Paternal",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11047.605145656482!2d-58.47491697874303!3d-34.59220759457196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6101cb54f93%3A0x2575f33c8c13fd35!2sParque%20la%20Isla%20de%20la%20Paternal!5e0!3m2!1sen!2sar!4v1712637323410!5m2!1sen!2sar",
  },
  {
    id: "5",
    name: "Parque Sarmiento",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15629.3653314847!2d-58.500729187793745!3d-34.561927079702414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6e5b3eef73d%3A0xd3c3514dbd8403ef!2sPARQUE%20SARMIENTO!5e0!3m2!1sen!2sar!4v1712637493340!5m2!1sen!2sar",
  },
  {
    id: "6",
    name: "Paseo El Rosedal Garden",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13141.286807707891!2d-58.42159801539903!3d-34.57072567253963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb59e37604cd7%3A0xe1f378f0dcf68992!2sPaseo%20El%20Rosedal%20Garden!5e0!3m2!1sen!2sar!4v1712637554026!5m2!1sen!2sar",
  },
  {
    id: "7",
    name: "Jardín Japonés",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13140.44900561363!2d-58.416147766680766!3d-34.57602614763075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb57a4147c5c7%3A0xfc930bf72fdf871f!2zSmFyZMOtbiBKYXBvbsOpcw!5e0!3m2!1sen!2sar!4v1712637605560!5m2!1sen!2sar",
  },
  {
    id: "8",
    name: "Parque Las Heras",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15624.662235746222!2d-58.40812614227433!3d-34.58694712023303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb57dbce045cd%3A0x2704541ae686099a!2sLas%20Heras%20Park!5e0!3m2!1sen!2sar!4v1712637670483!5m2!1sen!2sar",
  },
  {
    id: "9",
    name: "Plaza General San Martín",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6568.549284031851!2d-58.38056482356354!3d-34.59721606405175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccab595993163%3A0xb5d975299fbe9750!2sPlaza%20General%20San%20Mart%C3%ADn!5e0!3m2!1sen!2sar!4v1712637707497!5m2!1sen!2sar",
  },
  {
    id: "10",
    name: "Plaza del Congreso",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1641.8967963023886!2d-58.39010190821788!3d-34.60938055993273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac336a09c01%3A0xc702e3bd05a794d3!2sPlaza%20del%20Congreso!5e0!3m2!1sen!2sar!4v1712637762313!5m2!1sen!2sar",
  },
  {
    id: "11",
    name: "Parque Lezama",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8037.380931015002!2d-58.3778278440949!3d-34.62690683829563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a334ccee26fc95%3A0x2edeeb69361bc460!2sParque%20Lezama!5e0!3m2!1sen!2sar!4v1712638003338!5m2!1sen!2sar",
  },
  {
    id: "12",
    name: "Parque Chacabuco",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2128.678071089596!2d-58.44379287307491!3d-34.632714407513035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca35a8919007%3A0x2ed862297298f160!2sParque%20Chacabuco!5e0!3m2!1sen!2sar!4v1712638069802!5m2!1sen!2sar",
  },
  {
    id: "13",
    name: "Plaza Catedral",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d516.1035560722274!2d-71.302136621262!3d-41.13297076734445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7b71c9818515%3A0x2b829da720972fe9!2sPlaza%20Catedral!5e0!3m2!1sen!2sar!4v1712638174932!5m2!1sen!2sar",
  },
  {
    id: "14",
    name: "República de los Niños",
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.7073878055994!2d-58.022830207248404!3d-34.88869344623971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2dded89c33c53%3A0x3bbaa42c765db4d4!2sRep%C3%BAblica%20de%20los%20Ni%C3%B1os!5e0!3m2!1sen!2sar!4v1712638287705!5m2!1sen!2sar",
  },

  
];

export { parks };
