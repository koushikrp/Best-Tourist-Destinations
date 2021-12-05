import { useState } from "react";
import "./App.css";

var data = {
	ASIA: {
		"1. Bali, Indonesia":
			"Whether you’re soul searching or just looking for a place to unwind and ditch reality, Bali is a spiritual oasis. Bali is the kind of place you don’t just visit once.",
		"2. Kyoto, Japan":
			"Kyoto was once the capital of Japan and as such has a great amount of history and culture to discover. You’ll need at least a few days to discover all this city has to offer",
		"3. Tokyo, Japan":
			"The capital of Japan, Tokyo, has built a name for itself as one of the quirkiest capital cities in the world. From cat cafes to robot dance parties, there really isn’t anything that hasn’t been thought of.",
		"4. Phuket, Thailand":
			"The mountainous island of Phuket has quickly become one of Asia’s most sought after travel destinations and for good reason. Crystal blue waters, epic day hikes and incredible Thai cuisine make Phuket a dream destination for many.",
		"5. Dubai, UAE":
			"Dubai has become on of Asia’s most popular stopover cities for travellers heading across the globe from one side to the other, thanks to its unique location in the centre of travel paths.",
	},
	EUROPE: {
		"1. Paris, France":
			"Paris is filled with highly regarded museums, monuments and churches. You could easily spend your entire vacation admiring iconic sights like the Eiffel Tower, wandering through exhibits at the Louvre and strolling through the beautiful green space admiring flowers at the Luxembourg Gardens.",
		"2. London, UK":
			"Exploring the world-class British Museum, seeing a musical in the West End theater district, touring the Tower of London and gorging on fish and chips or a Sunday roast at a local pub are all part of the London bucket list experience. ",
		"3. Rome, Italy":
			"Rome is a can't-miss spot on your trip to Europe. The aroma of fresh Italian cooking wafts through the alleys, and historical sights stand proudly at every turn.",
		"4. Barcelona, Spain":
			"Barcelona, Spain's diverse architecture sets the city apart from other European destinations. Antoni Gaudí's Park Güell and Basilica de la Sagrada Família are beyond impressive, as are Palau de la Música Catalana and the many medieval buildings in the Gothic Quarter.",
		"5. Swiss Alps, Switzerland":
			"Located south of Zurich, Bern and Basel, the Swiss Alps are a haven for winter sports enthusiasts. While skiing, hiking and snowboarding tend to dominate this region, you'll also discover quaint towns, serene lakes and gorgeous scenery.",
	},
	AFRICA: {
		"1. Zanzibar, Tanzania":
			"Zanzibar offers something for everyone, whether you're in search of beautiful beaches or an unforgettable adventure. After trekking to this Indian Ocean destination off of the eastern coast of Africa, you'll instantly feel at ease as you lounge on quiet beaches like Matemwe and Pongwe.",
		"2. Victoria Falls, Zambia":
			"Outdoorsy types travel far and wide to admire this breathtaking UNESCO World Heritage Site. Straddling the border between Zambia and Zimbabwe, Victoria Falls is roughly twice as deep and wide as Niagara Falls, making it one of the world's most impressive waterfalls.",
		"3. Serengeti National Park, Tanzania":
			"If you're enamored with the prospect of coming face to face with elephants, giraffes, zebras and wildebeests, then a safari through Tanzania's Serengeti National Park is the adventure for you. ",
		"4. Cairo, Egypt":
			"Cairo can be overwhelming, as there's so much to see and do everywhere you turn. From Islamic Cairo's bustling Khan El-Khalili bazaar to the ancient Pyramids of Giza to the picturesque Nile River, you'll be immersed in this Egyptian city's history and culture before long.",
		"5. Mauritius, Island":
			"Mauritius appeals to vacationers in search of a bit of everything. Though its main draws are its powdery sands and luxe resorts, this small island nation east of Madagascar equally charms visitors with its mix of Dutch, French and British.",
	},
	"NORTH AMERICA": {
		"1. New York City, New York":
			"Where to begin with the Big Apple? Each borough offers something different, from trendy Brooklyn to stylish Manhattan.",
		"2. Miami, Florida":
			"The Miami area offers something for everyone – trendy nightlife, beaches, art galleries and world class food.",
		"3. Los Angles, California":
			"LA is a city for fitness fans,  as well as celebrity hunters – or celeb wannabes – who hope to catch sight of a star.",
		"4. Las Vegas, Nevada":
			"The party city shows no sign of slowing down, with casinos, upscale boutiques and luxury hotels all part of its pull.",
		"5. Cancun, Mexico":
			"It’s best known as a party town with great beaches and a perfect sunny climate. It’s also exploded in popularity over the last decade with holiday makers from all over the world.",
	},
};
function App() {
	var [currentContinent, setCurContinent] = useState(data.ASIA);
	var [continentInfo, setContinentInfo] = useState(Object.keys(currentContinent));
	function generateList(curCities) {
		setCurContinent(curCities);
		setContinentInfo(Object.keys(curCities));
	}
	return (
		<div className="App">
			<h1 className="App-header">Best Tourist Destinations</h1>
			<h2>Select a Continent to see the Top 5 Best Tourist Places in it </h2>
			<button onClick={() => generateList(data.ASIA)}>ASIA</button>
			<button onClick={() => generateList(data.EUROPE)}>EUROPE</button>
			<button onClick={() => generateList(data.AFRICA)}>AFRICA</button>
			<button onClick={() => generateList(data["NORTH AMERICA"])}>NORTH AMERICA</button>
			<div className="output">
				<ul>
					{continentInfo.map((city) => {
						return (
							<div className="listItem">
								<span className="cityName">{city}</span>
								<br />
								<span className="cityDescription">{currentContinent[city]}</span>
							</div>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default App;
