import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import { getStoredDonation } from '../utility/localstorage';

const Statistics = () => {
    const data = [
        { name: 'Your Donation', value: 70 },
        { name: 'Total Donation', value: 30 },
      ];
      
      const[donates, setDonates] = useState([])
      const donations = useLoaderData();
      useEffect(()=>{
        const storedDonationIds = getStoredDonation();
        if(donations.length >0 ){
          const donated = donations.filter(donation => storedDonationIds.includes(donation.id))

          setDonates(donated)
          
      }
      
      },[])

      const myDonationValue = parseFloat(((donates.length/12)*100).toFixed(2))
      const totalDonation = parseFloat((100- myDonationValue).toFixed(2))
      const yourDonationEntry = data.find(item => item.name === 'Your Donation')
      const yourDonationEntry2 = data.find(item => item.name === 'Total Donation');

      if (yourDonationEntry) {
        yourDonationEntry.value = myDonationValue;
      }
      if (yourDonationEntry) {
        yourDonationEntry2.value = totalDonation;
      }

      console.log(data);

      // console.log(myDonationValue,totalDonation)
      
      // console.log(donates.length)

      const COLORS = ['#00C49F', '#FF444A'];
      return (
        <div className='w-4/5 mx-auto flex justify-center'>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            values="value"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    );
};

export default Statistics;