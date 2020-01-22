document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector('form')
    const table = document.querySelector('table tbody');


    form.onsubmit = function(event) {
        event.preventDefault();

        try {
            const team1 = new Team(
                form.querySelector('#team1').value,
                form.querySelector('#points1').value
            );
            const team2 = new Team(
                form.querySelector('#team2').value,
                form.querySelector('#points2').value
            );
            update(team1, team2);
        } catch(err) {
            alert(err);
        }
    }

    function update(team1, team2) {
        const tr = document.createElement('tr');

        const t1Name = document.createElement('td');
        t1Name.innerHTML = `${team1.name}`;
        tr.appendChild(t1Name);

        const t2Name = document.createElement('td');
        t2Name.innerHTML = `${team2.name}`;
        tr.appendChild(t2Name);

        const score = document.createElement('td');
        score.innerHTML = `${team1.points} - ${team2.points}`;
        tr.appendChild(score);

        console.log(tr);

        table.appendChild(tr);
    }

    class Team {

        constructor(name, points) {
            this.name = name;
            this.points = points;
        }

        get name() {
            return this._name;
        }

        get points() {
            return this._points;
        }

        set points(points) {
            if (!points.match(/^([0-9]*)$/)) {
                throw 'Liczba punktów musi być cyfrą!';
            }
            if (+points < 0) {
                throw 'Liczba punktów musi być większa od 0!';
            }
            this._points = +points
        }

        set name(name) {
            if (!name) {
                throw 'Podaj nazwę drużyny!';
            }
            this._name = name;
        }
    }

}) ;