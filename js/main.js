const links = [{
    label: 'Week 1 Notes',
    url: 'week1/week1.html',
},
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
},
{
    label: 'Week 5 Notes',
    url: 'week5/w05Tact/index.html',
},
{
    label: 'Week 5 Team Activity',
    url: 'week5/week5.html',
},
{
    label: 'ToDo',
    url: 'todo/index.html',
},
{
    label: 'Week 7 Notes',
    url: 'week7/week7.html',
},
{
    label: 'Week 8 Notes',
    url: 'week8/week8.html',
},
{
    label: 'Week 8 Team Activity',
    url: 'week8/w9tact/swapi.html',
},
{
    label: 'Week 9 Team Activity',
    url: 'week9/w09teamactivity/index-Start.html',
},
{
    label: 'Week 9 Notes',
    url: 'week9/week9.html',
},
{
    label: 'Week 10 Notes',
    url: 'week10/week10.html',
},
{
    label: 'Week 10 Team Activity',
    url: 'week10/w10teamactivity/quakes.html',
},
{
    label: 'Week 11 Team Activity',
    url: 'week11/w11teamactivity/client/week11.html',
},
{
    label: 'Final Project',
    url: 'finalProj/index.html',
},
{
    label: 'repository',
    url: 'https://github.com/xjjeepster/WDD330_Portfolio',
}];


const ol = document.getElementById('assignments');

links.forEach(link => {
    let li = document.createElement('li');
    let a = document.createElement('a');

    a.setAttribute('href', link.url);
    a.innerText = link.label;

    li.appendChild(a);
    ol.appendChild(li);
});

