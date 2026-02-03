import { HireCard } from "@/components/common/HireCard"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"
import { teamMembers } from "@/assets/data/dummydata"

const Team = () => {
  const users = teamMembers

  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='MEET OUR TEAM' /> <br />
            <br />
            <Title title='A Talented Team of Enthusiastic and Innovative Creatives' className='title-bg' />
          </div>
          <div className='grid-4 py'>
            {users.map((item) => (
              <div className='card' key={item._id}>
                <div className='card-img'>
                  <img src={item.profilePhoto} alt={item.firstName} />
                </div>
                <div className='card-details'>
                  <h1 className="titleSm">{`${item.firstName} ${item.lastName}`}</h1>
                  <p className='job'>{item.jobTitle}</p>
                </div>
              </div>
            ))}
          <HireCard />
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
