import React from 'react';
import image from '/src/assets/img/general.jpeg'

import './SchoolInfos.css'
export  default function SchoolInfo (){
  const schoolData = {
    location: {
      name: 'Peace Home Comprehensive High School',
      address: 'Carrefour Peace Home, Etoug-Ebe, behind La Mama',
      city: 'Yaoundé',
      country: 'Cameroon'
    },
    educationType: 'General Education',
    classes: ['Form One', 'Form Two', 'Form Three', 'Form Four', 'Form Five Arts', 'Form Five Science', 'Lower Sixth Arts', 'Lower Sixth Science', 'Upper Sixth Arts', 'Upper Sixth Science'],
    admissionRequirements: [
      'Photocopy of Birth Certificate for new students',
      'Report card of the previous class',
      'Registration form (available in school and to be filled in at registration)',
      '2 toilet tissues',
      'A ream of paper (double A4)',
      'Correspondence booklet (1000)'
    ],
    feeModalites: [
      { class: 'Form One', installments: [95000, 30000, 30000], total: 155000 },
      { class: 'Form Two', installments: [95000, 30000, 30000], total: 155000 },
      { class: 'Form Three', installments: [95000, 30000, 30000], total: 155000 },
      { class: 'Form Four', installments: [95000, 30000, 30000], total: 155000 },
      { class: 'Form Five Arts', installments: [105000, 60000, 0], total: 165000 },
      { class: 'Form Five Science', installments: [110000, 70000, 0], total: 180000 },
      { class: 'Lower Sixth Arts', installments: [105000, 30000, 30000], total: 165000 },
      { class: 'Lower Sixth Science', installments: [120000, 45000, 30000], total: 195000 },
      { class: 'Upper Sixth Arts', installments: [120000, 60000, 0], total: 180000 },
      { class: 'Upper Sixth Science', installments: [120000, 85000, 0], total: 205000 }
    ],
    uniformGuidelines: [
      'Samples are available on campus',
      'Black shoes and long white socks',
      'Black belts for boys',
      'The trousers must be of normal length (up to the ankle and not slim)',
      'The skirts must go below the knees',
      'Sports shoes are white or black tennis and white socks',
      'Low haircut for all students (except for Form 2 girls who are allowed to plait cornrows without beads)'
    ]
  };

  return (
    <>
      <div className="row img-general">
        <h2>GENERAL EDUCATION SECTION</h2>
        <img src={image} alt="" />
      </div>
      <div className="school-info">
        <h2>{schoolData.location.name}</h2>
        <p>{schoolData.location.address}</p>
        <p>{schoolData.location.city}, {schoolData.location.country}</p>

        <h3>Education Type</h3>
        <p>{schoolData.educationType}</p>

        <h3>Classes Offered</h3>
        <ul>
          {schoolData.classes.map((className) => (
            <li key={className}>{className}</li>
          ))}
        </ul>

        <h3>Admission Requirements</h3>
        <ul>
          {schoolData.admissionRequirements.map((requirement) => (
            <li key={requirement}>{requirement}</li>
          ))}
        </ul>

        <h3>Fee Modalities</h3>
        <table>
          <thead>
            <tr>
              <th>Class</th>
              <th>First Installment</th>
              <th>Second Installment</th>
              <th>Third Installment</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
          {schoolData.feeModalites.map((feeData) => (
              <tr key={feeData.class}>
                <td>{feeData.class}</td>
                <td>{feeData.installments[0]} F CFA</td>
                <td>{feeData.installments[1]} F CFA</td>
                {feeData.installments.length === 3 && <td>{feeData.installments[2]} F CFA</td>}  
                <td>{feeData.total} F CFA</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>Uniform Guidelines</h3>
        <ul>
          {schoolData.uniformGuidelines.map((guideline) => (
            <li key={guideline}>{guideline}</li>
          ))}
        </ul>
      </div>
    </>
  );
};


