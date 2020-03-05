// Home v1.2

function timerCountdown() {
    $('[data-countdown]').each(function (index) {
        var $this = $(this);
        var finalDate = $(this).data('countdown');
        var milliseconds;

        $this.countdown(finalDate, function (event) {
            if (!event.offset.hours && !event.offset.minutes && !event.offset.seconds) {
                $(this).html('<span class="tfinish">Encerrado</span>');
            } else {
                if ($(this).attr('data-countdown-format') === 'total-hours') {
                    var totalHours = event.offset.totalDays * 24 + event.offset.hours;
                    totalHours = totalHours != 0 ? totalHours : '00';

                    $this.html(event.strftime(''
                    + '<span class="thour">' + totalHours + '</span>'
                    + '<span class="tdiv">:</span><span class="tminute">%M</span>'
                    + '<span class="tdiv">:</span><span class="tsecond">%S</span>')
                    + '<span class="tm2">:</span><span class="tmilsc"></span>');
                } else {
                    $this.html(event.strftime(''
                    + '<span class="tday">%D</span><span class="tdiv">:</span>'
                    + '<span class="thour">%H</span>'
                    + '<span class="tdiv">:</span><span class="tminute">%M</span>'
                    + '<span class="tdiv">:</span><span class="tsecond">%S</span>')
                    + '<span class="tm2">:</span><span class="tmilsc"></span>');
                }
            }
        })
        .on('finish.countdown', function () {
            $(this).html('<span class="tfinish">Encerrado</span>');
            $('.tmilsc').html.remove;
            clearInterval(milliseconds);
        });

        milliseconds = setInterval(function () {
            var ms = new Date().getMilliseconds();

            switch (true) {
                case ms < 10:
                    return $('.tmilsc').html('00' + ms);

                case ms < 100:
                    return $('.tmilsc').html('0' + ms);

                default:
                    return $('.tmilsc').html(ms);
            }
        }, 37);
    });
}

$(function () {
    if ($('[data-countdown]').length) {
        timerCountdown();
    }
});
