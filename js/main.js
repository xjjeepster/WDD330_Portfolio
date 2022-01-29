const links = [{
    label: 'Week 1 Notes',
    url: 'week1/week1.html',
}
,
{
    label: 'Week 2 Notes',
    url: 'week2/week2.html',
},
{
    label: 'Week 2 Team',
    url: 'week2/teamW2.html',
},
{
    label: 'Week 3 Team',
    url: 'week3/teamW3.html',
},
{
    label: 'Week 3 Notes',
    url: 'week3/week3.html',
},
{
    label: 'Week 4 Team',
    url: 'week4/teamWeek04.html',
},
{
    label: 'Week 4 Notes',
    url: 'week4/week4.html',
}
];


const ol = document.getElementById('assignments');

links.forEach(link => {
    let li = document.createElement('li');
    let a = document.createElement('a');

    a.setAttribute('href', link.url);
    a.innerText = link.label;

    li.appendChild(a);
    ol.appendChild(li);
});

