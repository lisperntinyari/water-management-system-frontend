import React from 'react';
import DashboardHeader from "../../components/DashboardHeader.jsx";
import dummyPlumbingItems from "../../util/dummyPlumbingItems.js";
import MarketPlaceCard from "../../components/MarketPlaceCard.jsx";
import {useCartStore} from "../../store/UserDataStore.js";

const MarketPlaceScreen = () => {
    const cart = useCartStore((state) => state.cart)
    return (
        <section className="w-full  bg-gray-900 ">
            <DashboardHeader name={`Market Place `} isCart={true} />
            <div className="grid grid-cols-4 gap-4 p-8">
                {
                    dummyPlumbingItems.map((item,index) => {
                        return(<MarketPlaceCard product={item} key={index}/>)
                    })
                }
            </div>

        </section>
    );
};

export default MarketPlaceScreen;
