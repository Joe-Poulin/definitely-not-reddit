const DecoderService = {
    decodeHtml: function(encodedHtml) {

        var returning = encodedHtml.toString();

        var entities = [
            ['amp', '&'],
            ['apos', '\''],
            ['#x27', '\''],
            ['#x2F', '/'],
            ['#39', '\''],
            ['#47', '/'],
            ['lt', '<'],
            ['gt', '>'],
            ['nbsp', ' '],
            ['quot', '"']
        ];
    
        for (var i = 0, max = entities.length; i < max; ++i) {
            returning = returning.replace(new RegExp('&'+entities[i][0]+';', 'g'), entities[i][1]);
        }

        return returning;
    }
}

export default DecoderService