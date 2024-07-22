#include <stdio.h>

struct __attribute__((__packed__)) FileHeader {
    short magic;
    int size;
    int reserved;
    int offset;
};

struct __attribute__((__packed__)) InfoHeader {
    int size;
    int width;
    int height;
    short planes;
    short bits_per_pixel;
    int compression;
    int image_size;
    int x_pixels;
    int y_pixels;
    int colors_used;
    int colors_important;
};

int main(int argc, char** argv) {
    struct FileHeader fh = {0};
    struct InfoHeader ih = {0};

    fh.magic = 0x4D42; // M(4D) B(42)
    fh.size = 70; // 70 bytes
    fh.offset = 54;

    ih.size = 40;
    ih.width = 2;
    ih.height = 2;
    ih.planes = 1;
    ih.bits_per_pixel = 24;
    ih.compression = 0;
    ih.image_size = 0;
    ih.x_pixels = 0;
    ih.y_pixels = 0;
    ih.colors_used = 0;
    ih.colors_important = 0;

    FILE* fp = fopen("image.bmp", "wb");

    fwrite(&fh, 1, sizeof(fh), fp);
    fwrite(&ih, 1, sizeof(ih), fp);

    char data[16] = {
    // |b    |g    |r   ||b    |g    |r    |extra bytes
        0x00, 0x00, 0xff, 0x00, 0xff, 0x00, 0x00, 0x00,
        0xff, 0x00, 0x00, 0xff, 0xff, 0xff, 0x00, 0x00,
    };

    fwrite(data, 1, sizeof(data), fp);
    fclose(fp);

    return 0;
}