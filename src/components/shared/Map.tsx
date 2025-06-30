import React, { useEffect, useRef, useState } from 'react';
import * as Highcharts from 'highcharts/highmaps';
import indiaData from '../../assets/india.json';

const clientData = [
	{
		name: 'BROADVIEW CONSTRUCTIONS AND HOLDINGS PRIVATE LIMITED',
		city: 'CHENNAI',
		lat: 13.0827,
		lon: 80.2707,
		value: 100,
	},
	{
		name: 'FABIO BEVERAGES PRIVATE LIMITED',
		city: 'CHENNAI',
		lat: 13.083,
		lon: 80.271,
		value: 120,
	},
	{
		name: 'FOREFRONT LOGISTICS PRIVATE LIMITED',
		city: 'MUMBAI',
		lat: 19.076,
		lon: 72.8777,
		value: 150,
	},
	{
		name: 'GREENOSCALE LOGIX PRIVATE LIMITED',
		city: 'BANGALORE',
		lat: 12.9716,
		lon: 77.5946,
		value: 130,
	},
	{
		name: 'KAUTILYA WAREHOUSING PRIVATE LIMITED',
		city: 'BANGALORE',
		lat: 12.972,
		lon: 77.595,
		value: 140,
	},
	{
		name: 'KOSAMBA LOGISTICS PRIVATE LIMITED',
		city: 'MUMBAI',
		lat: 19.0765,
		lon: 72.878,
		value: 160,
	},
	{
		name: 'NANDAV WAREHOUSING PRIVATE LIMITED',
		city: 'MUMBAI',
		lat: 19.0768,
		lon: 72.8783,
		value: 170,
	},
	{
		name: 'NASDA INFRA PRIVATE LIMITED',
		city: 'CHENNAI',
		lat: 13.0835,
		lon: 80.2715,
		value: 110,
	},
	{
		name: 'NDR BHADRA ESTATES PRIVATE LIMITED',
		city: 'CHENNAI',
		lat: 13.084,
		lon: 80.272,
		value: 115,
	},
	{
		name: 'NDR DISTRIBUTION CENTERS PRIVATE LIMITED',
		city: 'CHENNAI',
		lat: 13.0845,
		lon: 80.2725,
		value: 125,
	},
	{
		name: 'NDR FACTOR PRIVATE LIMITED',
		city: 'CHENNAI',
		lat: 13.085,
		lon: 80.273,
		value: 100,
	},
	{
		name: 'NDR GOASPACE PRIVATE LIMITED',
		city: 'GOA',
		lat: 15.2993,
		lon: 74.124,
		value: 150,
	},
	{
		name: 'NDR INVIT MANAGERS PRIVATE LIMITED',
		city: 'MUMBAI',
		lat: 19.077,
		lon: 72.879,
		value: 200,
	},
	{
		name: 'NDR INVIT TRUST',
		city: 'MUMBAI',
		lat: 19.0775,
		lon: 72.8795,
		value: 180,
	},
	{
		name: 'NDR PLANTATIONS PRIVATE LIMITED',
		city: 'BANGALORE',
		lat: 12.9725,
		lon: 77.5955,
		value: 120,
	},
	{
		name: 'NDR SAFESTORE PRIVATE LIMITED',
		city: 'CHENNAI',
		lat: 13.0855,
		lon: 80.2735,
		value: 105,
	},
	{
		name: 'NDR STORE HOUSE PRIVATE LIMITED',
		city: 'CHENNAI',
		lat: 13.086,
		lon: 80.274,
		value: 110,
	},
	{
		name: 'NDR TRADEHOUSE PRIVATE LIMITED',
		city: 'CHENNAI',
		lat: 13.0865,
		lon: 80.2745,
		value: 115,
	},
	{
		name: 'NDR VANSHIL WAREHOUSE PRIVATE LIMITED',
		city: 'KOLKATTA',
		lat: 22.5726,
		lon: 88.3639,
		value: 140,
	},
	{
		name: 'NDR WAREHOUSING SOLUTIONS PRIVATE LIMITED',
		city: 'DELHI',
		lat: 28.7041,
		lon: 77.1025,
		value: 150,
	},
	{
		name: 'NDRAVG BUSINESS PARK LIMITED',
		city: 'CHENNAI',
		lat: 13.087,
		lon: 80.275,
		value: 130,
	},
	{
		name: 'SEAHORSE DISTRIBUTIONS AND FREIGHT SERVICES PRIVATE LIMITED',
		city: 'CHENNAI',
		lat: 13.0875,
		lon: 80.2755,
		value: 125,
	},
	{
		name: 'SGP UNIVERSAL LLP',
		city: 'AHMEDABAD',
		lat: 23.0225,
		lon: 72.5714,
		value: 135,
	},
	{
		name: 'SRI AMRUTHALINGESWARA WAREHOUSING PRIVATE LIMITED',
		city: 'CHENNAI',
		lat: 13.088,
		lon: 80.276,
		value: 110,
	},
	{
		name: 'SVAHGRAHA CONSTRUCTIONS AND HOLDINGS PRIVATE LIMITED',
		city: 'CHENNAI',
		lat: 13.0885,
		lon: 80.2765,
		value: 115,
	},
	{
		name: 'VALIANT AMRUT INDIA PRIVATE LIMITED',
		city: 'BANGALORE',
		lat: 12.973,
		lon: 77.596,
		value: 125,
	},
	{
		name: 'VARAMA SIR INDIA LOGISTICS AND INFRASTRUCTURE PRIVATE LIMITED',
		city: 'GOA',
		lat: 15.2998,
		lon: 74.1245,
		value: 140,
	},
];

const animateCounter = (id: string, target: number, duration: number) => {
	const element = document.getElementById(id);
	if (!element) return;
	let start = 0;
	const increment = target / (duration / 16);
	const updateCounter = () => {
		start += increment;
		if (start >= target) {
			element.textContent = target.toString();
		} else {
			element.textContent = Math.floor(start).toString();
			requestAnimationFrame(updateCounter);
		}
	};
	updateCounter();
};

const Map: React.FC = () => {
	const mapRef = useRef<HTMLDivElement>(null);
	const chart = useRef<Highcharts.Chart | null>(null);
	const [hoveredClient, setHoveredClient] = useState<any>(null);

	useEffect(() => {
		if (!mapRef.current) return;

		const getRandomOffset = () => Math.random() * 0.5 - 0.3;

		const clientPoints = clientData.map((client) => ({
			lat: client.lat + getRandomOffset(),
			lon: client.lon + getRandomOffset(),
			value: client.value,
			city: client.city,
			clientName: client.name,
			marker: {
				radius: 1.5,
				fillColor: 'var(--color-button-secondary)',
				lineColor: 'var(--color-button-secondary)',
				lineWidth: 1,
			},
			events: {
				mouseOver: function () {
					setHoveredClient({
						name: client.name,
						city: client.city,
						value: client.value,
					});
				},
			},
		}));

    chart.current = Highcharts.mapChart({
  chart: {
    renderTo: mapRef.current,
    map: indiaData,
    backgroundColor: 'transparent',
    height: mapRef.current.offsetHeight,
  },
  title: { text: undefined },
  mapNavigation: {
    enabled: true,
    buttonOptions: { verticalAlign: 'bottom' },
  },
  plotOptions: {
    map: {
      allAreas: true,
      joinBy: ['st_nm', 'name'],
      borderColor: '#627C82',
      borderWidth: 0.5,
      nullColor: '#203D43',
      states: { hover: { color: '#4B8898' } },
    },
    mappoint: { cursor: 'pointer' },
  },
  tooltip: { enabled: false }, // Keep this at the top level
  series: [
    { type: 'map', name: 'States' },
    {
      type: 'mappoint',
      name: 'Client Locations',
      data: clientPoints,
      // Remove the tooltip config from here
    },
  ],
  credits: { enabled: false },
});

		return () => {
			chart.current?.destroy();
		};
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const section = document.querySelector('.map-section');
			if (
				section &&
				section.getBoundingClientRect().top < window.innerHeight
			) {
				animateCounter('client-count', clientData.length, 3500);
				window.removeEventListener('scroll', handleScroll);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center map-section">
			{/* Map */}
			<div className="rounded-xl overflow-hidden h-[700px]">
				<div ref={mapRef} className="w-full h-full bg-transparent" />
			</div>

			{/* Right Side Info */}
			<div className="space-y-8 text-center lg:text-left min-h-[200px] transition-all duration-300 ease-in-out">
				{/* Total Client Counter */}
				<div className="space-y-1">
					<h4 className="text-5xl font-bold text-[#4B8898]">
						<span id="client-count">0</span>+
					</h4>
					<p className="text-2xl uppercase tracking-wide text-[#627C82]">
						Total Clients Across India
					</p>
				</div>

				{/* Hover Info */}
				{hoveredClient ? (
					<div className="space-y-4 pt-6 border-t border-[#2e4c51]">
						<h4
							className="text-4xl font-semibold"
							style={{ color: 'var(--color-secondary)' }}
						>
							{hoveredClient.city}
						</h4>
						<p className="text-3xl font-medium text-[#4B8898]">
							{hoveredClient.name}
						</p>
						<p className="text-2xl text-[#627C82]">
							Sqft Covered:{' '}
							<strong>{hoveredClient.value}</strong>
						</p>
					</div>
				) : (
					<div className="opacity-60 pt-6 border-t border-[#2e4c51]">
						<p className="text-2xl font-medium">
							Hover over a client location on the map
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Map;