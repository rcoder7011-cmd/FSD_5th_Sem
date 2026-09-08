const jobs = [
    {
        date: "23-08-2026",
        title: "UI/UX Designer",
        tags: ["senior level", "project work", "full time", "intern level"],
    },
    {
        date: "25-08-2026",
        title: "Frontend Developer",
        tags: ["junior level", "web development", "full time", "remote"],
    },
    {
        date: "27-08-2026",
        title: "Backend Developer",
        tags: ["mid level", "Node.js", "full time", "project work"],
    },
    {
        date: "29-08-2026",
        title: "Data Analyst",
        tags: ["entry level", "data analysis", "part time", "intern level"],
    },
    {
        date: "01-09-2026",
        title: "React Developer",
        tags: ["junior level", "React.js", "full time", "remote"],
    },
    {
        date: "03-09-2026",
        title: "Machine Learning Engineer",
        tags: ["senior level", "Python", "full time", "project work"],
    }
];


const jobContainer = document.querySelector(".job-container");

jobs.map((job) => {

    const box = document.createElement("div");

    const dateCon = document.createElement("div");
    dateCon.innerText = job.date;

    const headingCom = document.createElement("div");
    headingCom.innerText = job.title;

    job.tags.map((t) => {

        const tag = document.createElement("span");
        tag.innerText = t;

        box.appendChild(tag);
    });

    box.appendChild(dateCon);
    box.appendChild(headingCom);

    jobContainer.appendChild(box);
});