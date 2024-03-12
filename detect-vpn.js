// Some sort of "api" to detect vpns

export function detectVpnByIsp() {
    let wtfismyipurl = "https://wtfismyip.com/json";
    let wtfdoireturn = false
    fetch(wtfismyipurl)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('this is not ok');
        })
        .then(data => {
            let isp = data.YourFuckingISP;
            let ispsurl = "https://gachaytb.github.io/vpn-info-list/info/vpn/isps.txt";
            fetch(ispsurl)
            .then(response => {
                if (response.ok) {
                    return response.text(); // Change response type to text
                }
                throw new Error('this is not ok');
            })
            .then(data => {
                let isps = data.split("\n");
                wtfdoireturn = (isp in isps)
                return wtfdoireturn
            })
            .catch(error => {
                console.error('problem!!!! :', error);
            });
        })
        .catch(error => {
            console.error('problem!!!! :', error);
        });
}
