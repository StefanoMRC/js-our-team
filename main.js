let team =[
    {
        'nome':'Wayne Barnett',
        'ruolo':'Founder & CEO',
        'img':'wayne-barnett-founder-ceo.jpg'
    },
    {
        'nome':'Angela Caroll',
        'ruolo':'Chief Editor',
        'img':'angela-caroll-chief-editor.jpg'
    },
    {
        'nome':'Walter Gordon',
        'ruolo':'Office Manager',
        'img':'walter-gordon-office-manager.jpg'
    },
    {
        'nome':'Angela Lopez',
        'ruolo':'Social Media Manager',
        'img':'angela-lopez-social-media-manager.jpg'
    },
    {
        'nome':'Scott Estrada',
        'ruolo':'Developer',
        'img':'scott-estrada-developer.jpg'
    },
    {
        'nome':'Barbara Ramos',
        'ruolo':'Graphic Designer',
        'img':'barbara-ramos-graphic-designer.jpg'
    },
]
console.log(team)
for(let i=0; i<team.length;i++){
    document.getElementById("cont").innerHTML+=
    `
    <div class="col-12 col-md-6 col-lg-4 p-4">
        <div class="card text-center" style="width: 23rem;">
            <img src=./img/${team[i]['img']} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${team[i]['nome']}</h5>
                    <p class="card-text">${team[i]['ruolo']}</p>
                </div>
        </div>
    </div>
    `
}