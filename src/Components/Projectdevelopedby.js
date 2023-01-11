import React, { useEffect, useState } from 'react'


export const Projectdevelopedby = () => {
  const [projectcontent, setProjectcontent] = useState([]);
  useEffect(() => {

    async function projectcontents() {

      const projectdevdata = await fetch('https://tattvamkolkata.com/wp-tattvam/wp-json/wp/v2/pages/33');
      const projectdevdatas = await projectdevdata.json();
      setProjectcontent(projectdevdatas.acf);
     // console.log(projectdevdatas.acf);
    }
    projectcontents();
  }, [])
  return (
    <section id="project-developed">
      <div className="container">

        <h3>{projectcontent.project_developed_by}</h3>

        <div className='logo-wrapper'>

          <div className='right-logos'> <img src={projectcontent.project_developed_logo_1} alt='Isha' /> </div>
          <div className='right-logos'> <img src={projectcontent.project_developed_logo_2} alt='Eden' /> </div>
          <div className='right-logos'> <img src={projectcontent.project_developed_logo_3} alt='Multicon' /> </div>
          <div className='left-logos'>  <img src={projectcontent.project_developed_logo_4} alt='Adya' /> </div>
        </div>
        <div className='clear'></div>

        {/* <div className='explore-more'> 
        <a href={projectcontent.project_developed_button_url}> {projectcontent.project_developed_button_name} </a>
         
         </div> */}



      </div>

    </section>
  )
}
