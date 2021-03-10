import Image from '../images/user.jpg';
import postImage from "../images/user123.jpg"
const date = new Date().toString()
const dummyData = [
    { 
      uid:1,
      title: 'John Doe',
      email:'johndoe235@gmailcom',
      image: Image,
      status:'verified',
      desc: 'If necessity is the mother of invention,&nbsp;coronavirus (COVID-19) forced many rounds the sector to rethink our every day lives from paintings to high school to amusement.',
      date: date,
      packages:['pkg1', 'pkg2'],
      posts:{
          post1:{title:'Title',date:date,description:'Description goes here Description goes hereDescription goes hereDescription goes here',image:postImage,approve:false},
          post2:{title:'Title',date:date,description:'Description goes here Description goes hereDescription goes hereDescription goes here',image:postImage,approve:false}

        }
    },
    {
      uid:2,
      title: 'Smith',
      email:'smith@gmailcom',
      image: Image,
      status:'pending',
      desc: 'If necessity is the mother of invention,&nbsp;coronavirus (COVID-19) forced many rounds the sector to rethink our every day lives from paintings to high school to amusement.',
      date: date,
      packages:['pkg1', 'pkg2'],
      posts:{
          post1:{title:'Title',date:date,description:'Description goes here Description goes hereDescription goes hereDescription goes here',image:postImage,approve:false},
          post2:{title:'Title',date:date,description:'Description goes here Description goes hereDescription goes hereDescription goes here',image:postImage,approve:false}

        }
    },
    {
      uid:3,
      title: 'Michal',
      email:'Michal122@gmail.com',
      image: Image,
      status:'verified',
      desc: 'If necessity is the mother of invention,&nbsp;coronavirus (COVID-19) forced many rounds the sector to rethink our every day lives from paintings to high school to amusement.',
      date: date,
      packages:['pkg1', 'pkg2'],
      posts:{
          post1:{title:'Title',date:date,description:'Description goes here Description goes hereDescription goes hereDescription goes here',image:postImage,approve:false},
          post2:{title:'Title',date:date,description:'Description goes here Description goes hereDescription goes hereDescription goes here',image:postImage,approve:false}

        }
    },
    {
      uid:4,
      title: 'Anand',
      email:'johndoe235@gmail.com',
      image: Image,
      status:'pending',
      desc: 'If necessity is the mother of invention,&nbsp;coronavirus (COVID-19) forced many rounds the sector to rethink our every day lives from paintings to high school to amusement.',
      date: date,
      packages:['pkg1', 'pkg2'],
      posts:{
          post1:{title:'Title',date:date,description:'Description goes here Description goes hereDescription goes hereDescription goes here',image:postImage,approve:false},
          post2:{title:'Title',date:date,description:'Description goes here Description goes hereDescription goes hereDescription goes here',image:postImage,approve:false}

        }
    },
    {
      uid:5,
      title: 'John Doe',
      email:'johndoe235@gmailcom',
      image: Image,
      status:'verified',
      desc: 'If necessity is the mother of invention,&nbsp;coronavirus (COVID-19) forced many rounds the sector to rethink our every day lives from paintings to high school to amusement.',
      date: date,
      packages:['pkg1', 'pkg2'],
      posts:{
          post1:{title:'Title',date:date,description:'Description goes here Description goes hereDescription goes hereDescription goes here',image:postImage,approve:false},
          post2:{title:'Title',date:date,description:'Description goes here Description goes hereDescription goes hereDescription goes here',image:postImage,approve:false}

        }
    },
    { 
        uid:6,
        title: 'John Doe',
        email:'johndoe235@gmailcom',
        image: Image,
        status:'verified',
        desc: 'If necessity is the mother of invention,&nbsp;coronavirus (COVID-19) forced many rounds the sector to rethink our every day lives from paintings to high school to amusement.',
        date: date,
        packages:['pkg1', 'pkg2'],
        posts:{
            post1:{title:'Title',date:date,description:'Description goes here Description goes hereDescription goes hereDescription goes here',image:postImage,approve:false},
            post2:{title:'Title',date:date,description:'Description goes here Description goes hereDescription goes hereDescription goes here',image:postImage,approve:false}
  
          }
      },
      {
        uid:7,
        title: 'Smith',
        email:'smith@gmailcom',
        image: Image,
        status:'pending',
        desc: 'If necessity is the mother of invention,&nbsp;coronavirus (COVID-19) forced many rounds the sector to rethink our every day lives from paintings to high school to amusement.',
        date: date,
        packages:['pkg1', 'pkg2'],
        posts:{
            post1:{title:'Title',date:date,description:'Description goes here Description goes hereDescription goes hereDescription goes here',image:postImage,approve:false},
            post2:{title:'Title',date:date,description:'Description goes here Description goes hereDescription goes hereDescription goes here',image:postImage,approve:false}
  
          }
      },
      {
        uid:8,
        title: 'Michal',
        email:'Michal122@gmailcom',
        image: Image,
        status:'verified',
        desc: 'If necessity is the mother of invention,&nbsp;coronavirus (COVID-19) forced many rounds the sector to rethink our every day lives from paintings to high school to amusement.',
        date: date,
        packages:['pkg1', 'pkg2'],
        posts:{
            post1:{title:'Title',date:date,description:'Description goes here Description goes hereDescription goes hereDescription goes here',image:postImage,approve:false},
            post2:{title:'Title',date:date,description:'Description goes here Description goes hereDescription goes hereDescription goes here',image:postImage,approve:false}
  
          }
      },
      {
        uid:9,
        title: 'John Doe',
        email:'johndoe235@gmailcom',
        image: Image,
        status:'verified',
        desc: 'If necessity is the mother of invention,&nbsp;coronavirus (COVID-19) forced many rounds the sector to rethink our every day lives from paintings to high school to amusement.',
        date: date,
        packages:['pkg1', 'pkg2'],
        posts:{
            post1:{title:'Title',date:date,description:'Description goes here Description goes hereDescription goes hereDescription goes here',image:postImage,approve:false},
            post2:{title:'Title',date:date,description:'Description goes here Description goes hereDescription goes hereDescription goes here',image:postImage,approve:false}
  
          }
      },
      {
        uid:10,
        title: 'John Doe',
        email:'johndoe235@gmailcom',
        image: Image,
        status:'verified',
        desc: 'If necessity is the mother of invention,&nbsp;coronavirus (COVID-19) forced many rounds the sector to rethink our every day lives from paintings to high school to amusement.',
        date: date,
        packages:['pkg1', 'pkg2'],
        posts:{
            post1:{title:'Title',date:date,description:'Description goes here Description goes hereDescription goes hereDescription goes here',image:postImage,approve:false},
            post2:{title:'Title',date:date,description:'Description goes here Description goes hereDescription goes hereDescription goes here',image:postImage,approve:false}
  
          }
      },
  ]
  export default dummyData;