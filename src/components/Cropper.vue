<template>
    <div class="row">
        <div class="col-xs-12">
            <div class="row">
                <div class="col-xs-12">
                    <div id="cropArea">
                        <div class="watermark"></div>
                    </div>    
                </div>
            </div>
            <div class="row">
                <div class="col-col-xs-12">
                    <p class="text-center">* สามารถใช้เมาส์หรือนิ้วเพื่อเลื่อนหรือย่อขยายได้</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-6">
                    <button class="btn btn-default btn-lg btn-block" @click="reset">ย้อนกลับ</button>
                </div>
                <div class="col-xs-6">
                    <button class="btn btn-primary btn-lg btn-block" @click="edited">แก้ไขเสร็จสิ้น</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    props: ['img', 'res'],
    mounted () {
        let cropArea = $('#cropArea')
        cropArea.croppie({
            url: this.img,
            showZoomer: false,
            boundary: {
                width: this.res,
                height: this.res
            },
            viewport: {
                width: this.res - 25,
                height: this.res - 25
            }
        })
    },
    methods: {
        reset() {
            this.$emit('reset')
        },
        edited(){
            let cropArea = $('#cropArea')
            cropArea.croppie('result', {
                type: 'canvas',
                size: {
                    width: 1500,
                    height: 1500
                },
                format: 'png'
            }).then((result) => {this.next(result)})
        },
        next(result){
            this.$emit('input', result)
            this.$emit('next')
        }
    }
}
</script>