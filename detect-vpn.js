// Some sort of "api" to detect vpns

export function detectVpnByIsp() {
    let wtfismyipurl = "https://wtfismyip.com/json";
    fetch(wtfismyipurl)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('this is not ok');
        })
        .then(data => {
            console.log(data);
            let isp = data.YourFuckingISP;
            console.log("Your ISP:", isp);
        })
        .catch(error => {
            console.error('problem!!!! :', error);
        });
}