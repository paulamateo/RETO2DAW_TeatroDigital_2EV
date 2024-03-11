<script setup lang="ts">
    import { onMounted, ref } from 'vue';

    const canvas = ref<HTMLCanvasElement | null>(null);
    const titleTheater = '../../assets/images/elements/logo_negro - copia.png'

    let x = 0;
    let dx = 1;
    let rotate = false;
    let angle = 0;

    let raton = {
    x: undefined as number | undefined,
    y: undefined as number | undefined,
    };

    const anima = () => {
        requestAnimationFrame(anima);
        const ctx = canvas.value?.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.value!.width, canvas.value!.height);

        ctx.save();
        if(rotate) {
            angle += Math.PI / 180;
        }
        ctx.translate(canvas.value!.width / 2, canvas.value!.height / 2);
        ctx.rotate(angle);
        ctx.translate(-canvas.value!.width / 2, -canvas.value!.height / 2);

        ctx.fillStyle = "white";
        ctx.fillRect(x, 0, 50, 50);

        ctx.fillStyle = "black";
        ctx.font = "40px GothamBook";
        ctx.fillText("T", x + 12, 40);

        ctx.fillStyle = "white";
        ctx.fillRect(x + 10, 20, 25, 15);
        
        ctx.font = "18px GothamBook";
        ctx.fillStyle = "black";
        ctx.fillText("R", x + 19, 34);

        ctx.restore();

        x += dx;
        if (x > canvas.value!.width || x < -50) {
            dx = -dx;
        }

        if (!rotate && angle != 0) {
            angle -= Math.PI / 180;
            if (angle < 0) {
                angle = 0;
            }
        }
    };

    const handleMouseMove = (event: MouseEvent) => {
        const rect = canvas.value?.getBoundingClientRect();
        if (rect) {
            raton.x = event.clientX - rect.left;
            raton.y = event.clientY - rect.top;
            rotate = true;
        }
    };

    const handleMouseOut = () => {
        rotate = false;
    };

    onMounted(() => {
        if (canvas.value) {
            canvas.value.addEventListener('mousemove', handleMouseMove);
            canvas.value.addEventListener('mouseout', handleMouseOut);
            anima();
        }
    });
</script>


<template>
    <canvas ref="canvas" width="150" height="50"></canvas>
</template>