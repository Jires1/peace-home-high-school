import React from 'react';
// import './school-info.css';
import image from '/src/assets/img/technical.jpeg'


export default function SchoolInfoTech () {
  const schoolData = {
    location: {
      name: 'Peace Home Comprehensive High School',
      address: 'Carrefour Peace Home, Etoug-Ebe, behind La Mama',
      city: 'Yaoundé',
      country: 'Cameroon'
    },
    educationType: 'Technical and Commercial Educations',
    classes: [
      'Form One',
      'Form Two',
      'Form Three',
      'Form Four',
    ],
    admissionRequirements: [
      'Photocopy of Birth Certificate for new students',
      'Report card of the previous class',
      'Registration form (available in school and to be filled in at registration)',
      '2 toilet tissues',
      'A ream of paper (double A4)',
      'Correspondence booklet (1000)'
    ],
    feeModalites: [
      { class: 'Form One', installments: [110000, 30000, 30000], total: 170000 },
      { class: 'Form Two', installments: [110000, 30000, 30000], total: 170000 },
      { class: 'Form Three', installments: [110000, 30000, 30000], total: 170000 },
      { class: 'Form Four', installments: [110000, 30000, 30000], total: 150000 },
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
            <h2>TECHNICAL & COMMERCIAL EDUCATIONS SECTION</h2>
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
                {feeData.installments.length === 3 && <td>{feeData.installments[2]} F CFA</td>}  {/* Only display third installment if it exists */}
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

        <h3>Additional Notes</h3>
        <ul>
            <li>Money paid is not refundable</li>
            <li>All students will be given a copy of the school rules and regulations upon registration</li>
            <li>The school's culture is <b>"Unrelenting Passion for Excellence!"</b></li>
        </ul>
        </div>
    </>
  );
};
