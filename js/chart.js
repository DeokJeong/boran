$(document).ready(function(){  
                                                //const 차트명 = document.getElementById("차트ID")
                                                //makeChart(차트명, 퍼센트)

    // HTML
    const html_chart = document.getElementById("html_chart")
    makeChart(html_chart, 85)

    // CSS
    const css_chart = document.getElementById("css_chart")
    makeChart(css_chart, 85)

    // JS
    const js_chart = document.getElementById("js_chart")
    makeChart(js_chart, 70)

    // Ai
    const ai_chart = document.getElementById("ai_chart")
    makeChart(ai_chart, 70)

    // Ps
    const ps_chart = document.getElementById("ps_chart")
    makeChart(ps_chart, 90)

    // Ae
    const ae_chart = document.getElementById("ae_chart")
    makeChart(ae_chart, 60)

    // Pr
    const pr_chart = document.getElementById("pr_chart")
    makeChart(pr_chart, 70)

    // PPT
    const ppt_chart = document.getElementById("ppt_chart")
    makeChart(ppt_chart, 70)


    
})



function makeChart(chart, percent){
    var remainer = 100 - percent
    var myChart = new Chart(chart, {            //차트생성
        type: 'doughnut',                       //도넛형태
            data: {                             //차트에 쓰일 데이터
            datasets: [{                        //상세데이터 ( 값, 색상 등등 상세내역)
                data: [percent, remainer],      // data: [값,값] 값만큼 도넛 잘린 갯수 증가
                backgroundColor: [              //도넛 색상 선택 데이터 순서와 매치됨 ( 데이터와 갯수가 동일해야함)
                '#caa8da',
                '#ead2e0'
                ],
                borderWidth: 0,                 // 차트 데이터와 데이터 사이에 너비 ( 0으로 두면 딱 붙음 )
                scaleBeginAtZero: true,         // 0부터 시작하는 선
            }
            ]
        },
        options: {
            responsive: false,
            cutoutPercentage: 50,
            tooltips: {enabled: false},          // enabled 활성화 여부
                        hover: {mode: null} 
        }
    });
}


