export class NewOrgData {
    id: string;
    text: string;
    title: string;
    img: string;
    dir?: string;
    open?: boolean;
    parent?:number|string;

}

export const NewOrgCharts: NewOrgData[] = [
	{
		"id": "1",
		"text": "Chairman & CEO",
		"title": "Henry Bennett",
		"img": "https://balkangraph.com/js/img/1.jpg"
	},
	{
		"id": "2",
		"text": "QA Lead",
		"title": "Emma Lynch",
		"img": "https://balkangraph.com/js/img/2.jpg",
		"parent": 1,
		"dir": "vertical"
	},
	{
		"id": "2.1",
		"text": "QA",
		"title": "Charles Little",
		"img": "https://balkangraph.com/js/img/3.jpg",
		"parent": 2
	},
	{
		"id": "2.2",
		"text": "QA",
		"title": "Douglas Riley",
		"img": "https://balkangraph.com/js/img/4.jpg",
		"parent": 2
	},
	{
		"id": "2.3",
		"text": "QA",
		"title": "Eugene Foster",
		"img": "https://balkangraph.com/js/img/5.jpg",
		"parent": 2
	},
	{
		"id": "3",
		"text": "Technical Director",
		"title": "Jerry Wagner",
		"img": "https://balkangraph.com/js/img/6.jpg",
		"parent": 1
	},
	{
		"id": "3.1",
		"text": "Team Lead",
		"title": "Mark Nichols",
		"img": "https://balkangraph.com/js/img/7.jpg",
		"parent": 3
	},
	{
		"id": "3.1.1",
		"text": "Programmer",
		"title": "Sean Parker",
		"img": "https://balkangraph.com/js/img/8.jpg",
		"parent": 3.1,
		"open": false
	},
	{
		"id": "3.1.1.1",
		"text": "Junior",
		"title": "Laura Alvarez",
		"img": "https://balkangraph.com/js/img/9.jpg",
		"parent": "3.1.1"
	},
	{
		"id": "4",
		"text": "Manager",
		"title": "Jonathan Lane",
		"img": "https://balkangraph.com/js/img/10.jpg",
		"parent": "1",
		"dir": "vertical"
	},
	{
		"id": "4.1",
		"text": "Marketer",
		"title": "Sandra Butler",
		"img": "https://balkangraph.com/js/img/11.jpg",
		"parent": "4"
	},
	{
		"id": "4.2",
		"text": "Designer",
		"title": "Julie Green",
		"img": "https://balkangraph.com/js/img/12.jpg",
		"parent": "4"
	},
	{
		"id": "4.3",
		"text": "Sales Manager",
		"title": "Richard Hicks",
		"img": "https://balkangraph.com/js/img/13.jpg",
		"parent": "4"
	},
	{
		"id": "3.2",
		"text": "Team Lead",
		"title": "Nicholas Cruz",
		"img": "https://balkangraph.com/js/img/14.jpg",
		"parent": 3
	},
	{
		"id": "3.2.1",
		"text": "Programmer",
		"title": "Michael Shaw",
		"img": "https://balkangraph.com/js/img/15.jpg",
		"parent": "3.2"
	},
	{
		"id": "3.2.1.1",
		"text": "Junior",
		"title": "John Flores",
		"img": "https://balkangraph.com/js/img/16.jpg",
		"parent": "3.2.1"
	}
	
]
