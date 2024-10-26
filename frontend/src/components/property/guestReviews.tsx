const ratings = [
    { label: 'Staff', score: 9.4 },
    { label: 'Facilities', score: 8.5 },
    { label: 'Cleanliness', score: 5.0 },
    { label: 'Comfort', score: 8.6 },
    { label: 'Value for money', score: 8.7 },
    { label: 'Location', score: 9.0 },
    { label: 'Free WiFi', score: 9.3 },
];

const reviews = [
    {
        name: 'John',
        country: 'Austria',
        avatar: 'J',
        comment:
            'Great location only a 1min walk from Kitahama station. Bathroom was great, loved that the bath was in its own little room within the...',
    },
    {
        name: 'John',
        country: 'Austria',
        avatar: 'J',
        comment:
            'Great location only a 1min walk from Kitahama station. Bathroom was great, loved that the bath was in its own little room within the...',
    },
    {
        name: 'John',
        country: 'Austria',
        avatar: 'J',
        comment:
            'Great location only a 1min walk from Kitahama station. Bathroom was great, loved that the bath was in its own little room within the...',
    },
    {
        name: 'John',
        country: 'Austria',
        avatar: 'J',
        comment:
            'Great location only a 1min walk from Kitahama station. Bathroom was great, loved that the bath was in its own little room within the...',
    },
    // You can add more reviews here.
];

export default function GuestReviews() {
    return <div className="container mx-auto py-10">
        {/* Guest Reviews Section */}
        <h2 className="text-2xl font-bold">Guest reviews</h2>
        <div className="flex items-center my-2">
            <span className="font-bold mr-2">7.7</span>
            <span className="font-medium">Good</span>
            <a href="#" className="ml-2 text-alice-blue-400 text-sm font-medium">1,295 reviews</a>
        </div>

        {/* Ratings Section */}
        <div className="grid grid-cols-4 gap-4">
            {ratings.map((rating, index) => (
                <div key={index}>
                    <div className="w-full bg-gray-300 rounded-full h-1.5 my-1">
                        <div
                            className="bg-lion-200 h-1.5 rounded-full"
                            style={{ width: `${rating.score * 10}%` }}
                        ></div>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span>{rating.label}</span>
                        <span className="font-semibold text-lion-200">{rating.score}</span>
                    </div>
                </div>
            ))}
        </div>

        {/* Review Cards Section */}
        <h3 className="mt-6 font-bold">Select topics to read reviews:</h3>
        <div className="grid grid-cols-4 gap-4 mt-4">
            {reviews.map((review, index) => (
                <div
                    key={index}
                    className="bg-white shadow-md p-4 rounded-md border border-gray-200"
                >
                    <p className="text-input-300">"{review.comment}"</p>
                    <div className="flex items-center mt-4">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-lion-200 text-white rounded-full">
                            {review.avatar}
                        </span>
                        <div className="ml-2">
                            <p className="font-bold text-sm">{review.name}</p>
                            <p className="text-xs text-gray-500">{review.country}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Read all reviews Button */}
        <div className="mt-6">
            <button className="px-6 py-2 text-sm bg-white border border-alice-blue-400 text-alice-blue-400 rounded-full hover:bg-gray-100">
                Read all reviews
            </button>
        </div>
    </div>
}