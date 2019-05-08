        $(".get-in-touch form").submit(function() {
            let str = $(this).serialize();
            $.ajax({
                type: 'POST',
                url: 'file.php',
                data: str,
                success: function(html) {
                    $('#result').html(html)
                }
            });
            return false
        });