function timerCountdown() {
    $('[data-countdown]').each(function () {
        var $this = $(this);
        var finalDate = $(this).data('countdown');

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
                    + '<span class="tdiv">:</span><span class="tsecond">%S</span>'));
                } else {
                    $this.html(event.strftime(''
                    + '<span class="tday">%D</span><span class="tdiv">:</span>'
                    + '<span class="thour">%H</span>'
                    + '<span class="tdiv">:</span><span class="tminute">%M</span>'
                    + '<span class="tdiv">:</span><span class="tsecond">%S</span>'));
                }
            }
        })
        .on('finish.countdown', function () {
            $(this).html('<span class="tfinish">Encerrado</span>');
        });
    });
}

$(function () {
    if ($('[data-countdown]').length) {
        timerCountdown();
    }
});
