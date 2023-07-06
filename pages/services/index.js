import React from 'react'
import ServicesLinks from '@/comps/myservices/ServicesLinks'
import CmsService from '@/comps/myservices/CmsService'
import ServiceLinksTwo from '@/comps/myservices/ServiceLinksTwo'
import ServiceHeader from '@/comps/myservices/ServiceHeader'
import ServicesExit from '@/comps/myservices/ServicesExit'
import ServicesFeatures from '@/comps/myservices/ServicesFeatures'
function services() {
  return (
   <section>
     <ServiceHeader/>
     <ServicesFeatures/>
    <ServicesLinks/>
    <CmsService/>
    <ServiceLinksTwo/>
    <ServicesExit/>
   
    </section>
  )
}

export default services
