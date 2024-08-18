import React from 'react'
import SectionTitle from '../SectionTitle';

function EmployeeBenefits() {
  const benefitsData = [
    {
      title: "Remote Work Opportunities",
      description: "Enjoy the flexibility of remote work options at Zorg. Our adjustable options allow you to achieve a better work-life balance and operate from the comfort of your preferred workspace."
    },
    {
      title: "Extensive Leave Benefits Package",
      description: "We have a beneficial leave benefits package to ensure that you have ample time off to recharge, relax, and attend to personal matters."
    },
    {
      title: "Two Festival Bonuses",
      description: "You can enjoy the festivals with our double festival bonuses, open to take at your festival of choice."
    },
    {
      title: "Tech and Device Allowance",
      description: "Receive a stipend for technology and devices necessary to support your professional performance."
    },
    {
      title: "Health and Wellness Support",
      description: "At Enfinito, we prioritize your welfare. You can access comprehensive benefits and initiatives aimed to promote your physical and psychosocial wellness.."
    },
    {
      title: "Performance bonuses",
      description: "We recognize and reward hard work and dedication. Our performance bonus ensures your efforts get the acknowledgement and appreciation they deserve."
    },
    {
      title: "Emergency Loan Assistance",
      description: "In times of unexpected financial needs, our emergency loan facilities are here to assist you."
    },
    {
      title: "Employee Referral Incentives",
      description: "You can refer talented individuals to join our team and receive bonuses as a token of appreciation for your help in strengthening our workforce."
    },
    {
      title: "Mentorship and Professional Development Programs",
      description: "Access personalized coaching, development programs and mentorship opportunities designed to nurture your skills and support your career growth journey at Enifinito."
    },

  ]
  return (
    <div className='container mb-5'>
      <SectionTitle
        title={"Employee Benefits"}
      />

      <div className="row">
        {
          benefitsData.map((data, index) =>
          <div  className='col-12 col-md-4 mb-4' key={index}>
            <div className="benefits-card p-3 h-100">
                <h4 className="card-title mb-3">{data.title}</h4>
                <p className='card-text '>{data.description}</p>
            </div>

          </div>
          )
        }
      </div>
    </div>
  )
}

export default EmployeeBenefits;