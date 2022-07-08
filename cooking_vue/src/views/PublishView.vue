<template>
  <div class="container">
    <div class="container__inner">
      <div class="inline">
        <form class="recipe">
          <label class="recipe__name" for="nameField">Title recipe</label><br>
          <input class="recipe__input" type="text" id="nameField" size="30" name="name" placeholder="Title">
          <br>
          <label class="recipe__name" for="messageField">Cooking process</label><br>
          <textarea class="recipe__input" name="message" id="messageField" cols="50" rows="10"
            placeholder="Start typing recept..."></textarea>
          <br>
          <input class="recipe__btn" type="submit" value="Add recipe">
        </form>
        <form class="categories">
          <label class="category__label">
            <input class="category__input" type="checkbox" name="first">
            First course
          </label>
          <br>
          <label class="category__label">
            <input class="category__input" type="checkbox" name="second">
            Second course
          </label>
          <br>
          <label class="category__label">
            <input class="category__input" type="checkbox" name="dessert">
            Dessert
          </label>
          <br>
          <label class="category__label">
            <input class="category__input" type="checkbox" name="salad">
            Salad
          </label>
          <br>
          <label class="category__label">
            <input class="category__input" type="checkbox" name="drink">
            Drink
          </label>
        </form>
      </div>

      <input type="file" name="files[]" id="upload-file__input_1" class="upload-file__input"
        accept=".jpg, .jpeg, .png, .gif, .bmp, .doc, .docx, .xls, .xlsx, .txt, .tar, .zip, .7z, .7zip" multiple>

      <label class="upload-file__label" for="upload-file__input_1">
        <svg class="upload-file__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M286 384h-80c-14.2 1-23-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c11.6 11.6 3.7 33.1-13.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-23-23V366c0-13.3 10.7-24 24-24h136v8c0 31 24.3 56 56 56h80c30.9 0 55-26.1 57-55v-8h135c13.3 0 24 10.6 24 24zm-124 88c0-11-9-20-19-20s-19 9-20 20 9 19 20 20 21-9 20-20zm64 0c0-12-9-20-20-20s-20 9-19 20 9 20 20 20 21-9 20-20z">
          </path>
        </svg>
        <span class="upload-file__text">Attach recipe's photos</span>
      </label>
      
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 90px;
  height: 100vh;
  width: 100%;
}

.container__inner {
  margin-top: 150px;
  margin-left: 150px;
  margin-right: 150px;
  background-color: rgba(255, 219, 175, 0.98);
  padding: 30px;
  border-radius: 15px;
}

label {
  font-size: 20px;
  margin-right: 10px;
}

.inline>.recipe,
.categories {
  display: inline-block;
  vertical-align: middle;
  width: 50%;
}

.recipe {
  margin-bottom: 30px;
}

.category__label:hover {
  color: #ff8174;
  transition: all 0.1s linear;
}

.recipe__input {
  margin-bottom: 20px;
  margin-top: 10px;
  outline: none;
  padding: 10px 10px;
  border-radius: 15px;
  border: none;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.recipe__btn {
  background: #ff8174;
  padding: 10px 10px;
  border-radius: 12px;
  border: none;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  opacity: 0.8;
}

.recipe__btn:hover {
  opacity: 1;
}

.upload-file__input {
  opacity: 0;
  position: absolute;
  z-index: -1;
  overflow: hidden;
  width: 0.4px;
  height: 0.4px;
}

.upload-file__label {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 240px;
  border: 2px dashed #6c7279;
  padding: 9px 49px;
  border-radius: 6px;
  cursor: pointer;
}

.upload-file__text {
  font-size: 16px;
  text-align: center;
}

.upload-file__icon {
  width: 30px;
  height: auto;
  margin-right: 11px;
  fill: #6c7279;
}

.upload-file__label .upload-file__text,
.upload-file__label .upload-file__icon path {
  transition: .25s ease;
}

.upload-file__label:hover .upload-file__text {
  color: #ff8174;
}

.upload-file__label:hover .upload-file__icon path {
  fill: #ff8174;
}

.upload-file__label:hover {
  border: 2px dashed #ff8174;
}

.category__input {
  opacity: 0.7;
}
</style>