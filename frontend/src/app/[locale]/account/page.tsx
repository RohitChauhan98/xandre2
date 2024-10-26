'use client'
import AccountNavbar from "@/components/navbars/AccountNavbar";
import PropertyCard from "@/components/account/propertyCards";
import hotelProfile from '/public/assets/images/hotelProfile.png'
import Dashboard from "@/components/account/dashboard";


const properties = [
    {
        imageUrl: hotelProfile.src,
        name: 'Highland Property',
        location: 'Okinawa, Japan',
        progress: 90,
    },
    {
        imageUrl: hotelProfile.src,
        name: 'Highland Property',
        location: 'Okinawa, Japan',
        progress: 90,
    },
    {
        imageUrl: hotelProfile.src,
        name: 'Highland Property',
        location: 'Okinawa, Japan',
        progress: 90,
    },
    {
        imageUrl: hotelProfile.src,
        name: 'Highland Property',
        location: 'Okinawa, Japan',
        progress: 90,
    },
];

export default function AccountPage() {
    const handleContinue = () => {
        alert('Continue registration clicked');
      };
    
      const handleDelete = () => {
        alert('Delete clicked');
      };
    return (
        <div>
            <div className=" bg-oxford-blue">
                <AccountNavbar />
            </div>
            <div className="max-w-[1100px] mx-auto">
                <div className="border-b">
                    <div>
                        <h3>Welcome, User</h3>
                        <p>You have 5 upcoming trips. Do you need help planning?</p>
                    </div>
                    <div>
                        <div>
                            <p>Membership Status</p>
                            <p>Silver Membership</p>
                        </div>
                        {/* Image */}
                    </div>
                </div>
                <div>
                    <div>
                        <h3>Your Accuont</h3>
                        <p>Properties not yet on Xandre</p>
                        <p>Grow your business by adding these properties to the world's best online travel agency, Xandre.</p>
                    </div>
                    <div>

                    </div>
                </div>
                {properties.map((property, index) => (
                    <PropertyCard
                        key={index}
                        imageUrl={property.imageUrl}
                        name={property.name}
                        location={property.location}
                        progress={property.progress}
                        onContinue={handleContinue}
                        onDelete={handleDelete}
                    />
                ))}
                <Dashboard />
            </div>
        </div>
    )
}