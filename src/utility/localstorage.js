const getStoredDonation=()=>{
    const storedDonation  = localStorage.getItem('job-application')
    if(storedDonation){
      return JSON.parse(storedDonation)
    }
    return []
}

const saveDonation = id =>{
  const storedDonations = getStoredDonation()
  const exits = storedDonations.find(jobId => jobId ==id)
  if(!exits){
      storedDonations.push(id)
      localStorage.setItem('job-application',JSON.stringify(storedDonations))
  }

}
export {getStoredDonation,saveDonation}