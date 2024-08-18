"use client"
import React, { useState } from 'react'
import SectionTitle from '../SectionTitle';
import TabsButton from './TabsButton';
import Image from 'next/image';


function TabsContainer({ serviceData }) {
    const [currentTab, setCurrentTab] = useState(1);
    const handleTab = (id) => {
        setCurrentTab(id);
    }
    console.log(serviceData)

    const selectedService = serviceData.find((item) => item.id === currentTab);
    console.log(selectedService)
    return (
        <div className='container details-card p-3 rounded-3 mb-5'>

            <div className="row">
                <div className="col-12 col-md-3 mb-4">
                    {
                        serviceData.map((data, index) =>
                            <TabsButton
                                key={index}
                                currentTab={currentTab}
                                item={data}
                                handleTab={handleTab}
                            />

                        )
                    }
                </div>
                <div className="col-12 col-md-4 mb-4">
                    <Image
                        src={selectedService.imageUrl}
                        alt={selectedService.title}
                        width={500}
                        height={300}
                        className='rounded-4 h-100'
                        objectFit='cover'
                        layout="responsive"
                    />
                </div>
                <div className="col-12 col-md-5 mb-4">
                    <h2 className="mb-3">{selectedService.title}</h2>
                    <p>{selectedService.description}</p>
                    <h4 className="heading-4 text-center">Our Features</h4>
                    <ul className="list-group">
                        {
                            selectedService.keyServices.map((data, index) =>
                                <li key={index} className="list-group-item list-group-item-light text-white">{data.title} - {data.description}</li>
                            )
                        }
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default TabsContainer;