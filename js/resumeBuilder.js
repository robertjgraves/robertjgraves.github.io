var bio = {
	"name" : "Robert J. Graves",
	"role" : "Web Developer and Project Manager", 
	"contacts" : {
		"email" : "robertjgraves@gmail.com",
		"mobile" : "559-250-9343",
		"twitter" : "@robertjgraves",
		"github" : "robertjgraves",
		"location": "Sacramento, California"},

	"biopic" : "images/rjg.JPG",
	"welcomeMessage" : "Hello! My name is Robert and I'm a web developer and IT project manager. For the past 14 years I have been working in IT by day managing projects and by night developing websites. I'm looking for new opportunities that will allow me to build sites and manage projects during the day. I'm a Certified ScrumMaster and Project Management Professional so I am well versed in both Agile and Traditional project management. On the web development side in the past, I've worked with ColdFusion MX, a bit of ASP.NET and C# and lately have been using Ruby on Rails. I'm currently located in Sacramento, California. If you're looking for a well rounded IT Project Manager and Web Developer please consider me!",
	"skills" : ["ASP.NET" , "Ruby on Rails", "HTML", "CSS", "JavaScript", "Git", "Windows Servers", "Traditional Project Management", "Scrum"],
	"display" : function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		var formattedContactMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedContactEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedContactTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedContactGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedContactLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		
		var formattedContactDetails = formattedContactEmail + formattedContactMobile + formattedContactTwitter + formattedContactGitHub +formattedContactLocation;
		$("#topContacts:last").append(formattedContactDetails);
		$("#footerContacts").append(formattedContactDetails);

		var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

		$("#header").append(formattedBioPic + formattedWelcomeMsg);

		
		if (bio.skills.length > 0)
		{
			$("#header").append(HTMLskillsStart);

			for (skill in bio.skills)
			{
				console.log(bio.skills[skill]);
				var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
				$("#skills").append(formattedSkill);
			}
		}

	}

};


var work = {
	"jobs" : [
	{ 
		"employer" : "Pacific Ethanol, Inc",
		"title" : "Director, Information Technology",
		"location": "Sacramento, California",
		"dates": "August 2006 to Present",
		"description" : "Manages the IT systems for corporate headquarters, 3 remote offices, and 4 ethanol plants encompassing 125 desktops, 30 servers, and multiple network and phone systems. Supervises IT Help Desk, Systems Administration and Development personnel to ensure entire information system is functioning correctly. Project Manager for Meraki Wireless Access Point Deployment and WiFi network redesign for secure employee and guess access. Project manager and head of the IT Steering Committee overseeing implementation of a companywide Dynamics NAV to SAP implementation. Developed Project Plan which included detailed Change Management and Stakeholder Management plans for use on SAP Implementation and other high visibility projects. Organization Change Manager for SAP Implementation ensuring all stakeholders expectations were managed, new documentation was prepared and employees received necessary training. Facilitated Q and A forums to ensure all impacted were up to speed on project progress. Project Manager for a Unified Communications initiative that reduced conferencing costs, local and long distance and enabled follow me-find me capabilities across the organization using Microsoft Exchange 2010 and Lync 2010. Consolidated Nortel BCM 50s and BCM 400 systems and integrated with Lync 2010 infrastructure. Resulted in over 60 percent reduction in monthly local and long distance costs and reduced mobile phone expenses. Led network infrastructure consolidation efforts for 8 sites. Migrated from point to point VPN T1 network to MPLS network with centralized internet access based out of headquarters. Eliminated multiple redundant firewall systems and lowered monthly communications costs 41% while standardizing with a single carrier. Managed stakeholder expectations and ensured migration had minimal impact on all sites involved."
	},
	{
		"employer" : "Rack N Road",
		"title" : "IT Manager",
		"location" : "Sacramento, California",
		"dates" : "January 2006 to August 2006",
		"description" : "Project manager for major e-commerce website and integration with Retail Pro database system. Coordinated and managed all corporate headquarters technologies including 12 servers, 40 point of sale stations and 25 office workstations."
	},
	{
		"employer" : "Ontario Christian Schools",
		"title" : "Webmaster and IT Manager",
		"location" : "Ontario, California",
		"dates" : "July 2003 to July 2005",
		"description" : "Consolidated 3 Windows NT domains for 2 sites and 3 business groups into a single Active Directory domain reducing administrative costs, improving security and standardizing on Windows Server 2000. Completed numerous projects focusing on improving reliability and access to the school’s systems for 100+ faculty and staff and 1500+ students over 2 campuses. Upgraded 300 workstations to Windows 2000 Professional. Deployed Microsoft Exchange 2003 to provide email for all OCS Faculty and Staff greatly improving parent/teacher communications. Provided day to day support for faculty, staff and students. Redesigned and deployed new ColdFusion based website and content management system which allowed staff to post the latest news and events without IT intervention. "
	},
	{
		"employer" : "Fisher Comuter Consulting",
		"title" : "Business Systems Analyst",
		"location" : "Alta Loma, California",
		"dates" : "October 2000 to June 2003",
		"description" : "Provided Windows, network and systems support for local small and medium size companies without a dedicated IT staff. Collaborated with information systems for sites ranging from 5 PCs and a server to organization with 250+ workstations and 1000+ users. Consulted on specialized software and PC upgrades and repairs, server setup and maintenance, cabling and network installation, virus protection, internet security and web filtering, and custom MS Access database design."
	}
	],
	"display" : function() {
		for(job in work.jobs)
		{
			$("#workExperience").append(HTMLworkStart);
			var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

			$(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle + formattedWorkLocation + formattedWorkDates + formattedWorkDescription);
		}
	}

};

var projects = {
	"projects" : [
	{
		"title" : "Exchange High Availability and Disaster Recovery",
		"dates" : "June 2014-December 2014",
		"description" : "Project Manager for Exchange 2014 High Availability and Disaster Recovery project migrating enterprise from Exchange 2010. Project included main site high availability configuration and a secondary datacenter with replication between sites.",
		"images" : ["images/197x148.gif", "images/197x148.gif"],
		// added location so places where I've done projects at will show up on the map! 
		"location" : "Sacramento, California"
	},
	{
		"title" : "Cub Scout Family Talent Database",
		"dates" : "October 2014-present",
		"description" : "Developer for a Cub Scout Family Talent Website Application built on ASP.NET and hosted on Windows Azure.",
		"images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"],
		"location" : "Elk Grove, California"
	},
	{
		"title" : "Lync 2013 Project with High Availability and Enterprise Voice",
		"dates" : "June 2014-present",
		"description" : "Project Manager for a Lync 2010 to Lync 2013 project that involved setting up high availability at the main datacenter, a second data center and rolling out enterprise voice to 4 plants.",
		"images": ["images/350x150.gif"],
		"location" : "Sacramento, California"
	},
	{
		"title" : "Lync 2013 Enterprise Voice",
		"dates" : "June 2014-present",
		"description" : "Project Manager for a Lync 2013 project deploying enterprise voice replacing an aging Nortel BCM 50 phone system.",
		"images": ["images/350x150.gif"],
		"location" : "Stockton, California"
	},
	{
		"title" : "Lync 2013 Enterprise Voice",
		"dates" : "June 2014-present",
		"description" : "Project Manager for a Lync 2013 project deploying enterprise voice replacing an aging Nortel BCM 50 phone system.",
		"images": ["images/350x150.gif"],
		"location" : "Boardman, Oregon"
	},
	{
		"title" : "Lync 2013 Enterprise Voice",
		"dates" : "June 2014-present",
		"description" : "Project Manager for a Lync 2013 project deploying enterprise voice replacing an aging Nortel BCM 50 phone system.",
		"images": ["images/350x150.gif"],
		"location" : "Madera, California"
	},
	{
		"title" : "Lync 2013 Enterprise Voice",
		"dates" : "June 2014-present",
		"description" : "Project Manager for a Lync 2013 project deploying enterprise voice replacing an aging Nortel BCM 50 phone system.",
		"images": ["images/350x150.gif"],
		"location" : "Burley, Idaho"
	}
	],
	"display" : function() {
		for (project in projects.projects)
		{
			$("#projects").append(HTMLprojectStart);
			
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			
			var formattedProjectImages ="";

			if(projects.projects[project].images.length > 0){
			
				for (image in projects.projects[project].images)
				{
					formattedProjectImages += HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				}
			}

			$(".project-entry:last").append(formattedProjectTitle + formattedProjectDates + formattedProjectDescription + formattedProjectImages);
		}
	}
};

var education = {
	"schools" : [
	{
		"name" : "University of California, Riverside",
		"degree": "Bachelor of Arts", 
		"majors": ["History and Administrative Studies"],
		"dates": 2001,
		"location" : "Riverside, California",
		"url" : "http://www.ucr.edu"
	},
	{
		"name" : "University of San Francisco",
		"degree" : "Master of Science",
		"majors": ["Information Systems"],
		"dates": 2009,
		"location" : "Sacramento, California",
		"url" : "http://www.usfca.edu"
	}
	],
	"onlineCourses" : [
	{
		"title" : "Intro to HTML and CSS",
		"school" : "Udacity",
		"dates" : 2014,
		"url" : "https://www.udacity.com/course/ud304"
	},
	{
		"title" : "How to Use Git and GitHub",
		"school" : "Udacity",
		"dates" : 2014,
		"url" : "https://www.udacity.com/course/ud775"
	},
	{
		"title" : "JavaScript Basics",
		"school" : "Udacity",
		"dates" : 2014,
		"url" : "https://www.udacity.com/course/ud804"
	}
	],
	"display" : function() {
		for (var school in education.schools)
		{
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name );
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree );
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates );
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location );
			var formattedSchoolMajors = "";

			for (major in education.schools[school].majors)
			{
				var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major] );
				formattedSchoolMajors += formattedSchoolMajor;
			}
			
			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree + formattedSchoolDates + formattedSchoolLocation + formattedSchoolMajors);
		}

		$("#education").append(HTMLonlineClasses);

		for (var onlineCourse in education.onlineCourses)
		{

			$("#education").append(HTMLonlineClassesStart);
			
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
			
			// making the hyperlink work by replacing the # with the online course URL specified. 
			formattedOnlineTitle = formattedOnlineTitle.replace("#", education.onlineCourses[onlineCourse].url);

			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);;
			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);;
			// adjustment made to put make the title clickable and will open up the URL specified. Just setting this to empty string. 
			var formattedOnlineURL = HTMLonlineURL.replace("%data%", "");;

			$(".onlineCourse-entry:last").append(formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL);
		}
	}
};

bio.display();
work.display();
projects.display();
education.display();


function inName(oldName)
{
	var finalName = oldName;
    // Your code goes here!
    var spaceLocation = finalName.search(" ");
    var firstName = finalName.slice(0,spaceLocation);
    var lastName = (finalName.slice(spaceLocation + 1));
    firstLetter = firstName[0].toUpperCase();
    firstNameLetters = firstName.slice(1,spaceLocation).toString().toLowerCase();
    
    properFirst = firstLetter + firstNameLetters;
    
    properLast = lastName.toString().toUpperCase(); 
    properName = properFirst + " " + properLast;
    
    
    // Don't delete this line!
    return properName.toString();
};

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);