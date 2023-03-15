const date = new Date();
            const month = date.toLocaleString('default', { month: 'long' });
            const days = date.getDate();
            const day = date.toLocaleString('default', { weekday: 'long' });
            const time = date.toLocaleTimeString();

            document.getElementById('date').innerHTML = `${month} ${days}`;
            document.getElementById('time').innerHTML = time;
            document.getElementById('day').innerHTML = day;
            document.getElementById('today').innerHTML = day;
            document.getElementById('datetoday').innerHTML = `${month} ${days} ${time}`;