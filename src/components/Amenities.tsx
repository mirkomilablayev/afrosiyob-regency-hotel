import { Wifi, Car, Thermometer, Plane, Clock, Coffee } from 'lucide-react';

interface Amenity {
    name: string;
    icon: React.ElementType;
}

const amenities: Amenity[] = [
    { name: 'Free WiFi', icon: Wifi },
    { name: 'Parking', icon: Car },
    { name: 'Sauna', icon: Thermometer },
    { name: 'Airport Transfer', icon: Plane },
    { name: '24h Reception', icon: Clock },
    { name: 'Breakfast Included', icon: Coffee },
];

export default function Amenities() {
    return (
        <section id="amenities" className="py-24 bg-zinc-50 border-y border-zinc-200">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-amber-600 font-semibold tracking-widest uppercase text-sm mb-4 block">
                        Features
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif text-slate-800 font-bold mb-6">
                        Hotel Amenities
                    </h2>
                    <p className="text-slate-600 font-light text-lg max-w-2xl mx-auto">
                        Enjoy world-class services and facilities to make your stay as comfortable and convenient as possible.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center mt-12">
                    {amenities.map((amenity, index) => {
                        const Icon = amenity.icon;
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-slate-100 transition-all duration-300 transform group hover:-translate-y-2 hover:shadow-xl hover:bg-slate-900"
                            >
                                <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-amber-50 group-hover:bg-amber-500/10 transition-colors">
                                    <Icon className="w-8 h-8 text-amber-500 group-hover:text-amber-400 transition-colors" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-slate-800 font-medium group-hover:text-white transition-colors">
                                    {amenity.name}
                                </h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
