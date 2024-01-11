const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting)
        {
            entry.target.classList.add("show");
        }
        else
        {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
const hidden1Elements = document.querySelectorAll(".hidden1");
const hidden2Elements = document.querySelectorAll(".hidden2");
const hidden3Elements = document.querySelectorAll(".hidden3");

const onlyBlurElements = document.querySelectorAll(".onlyBlur");
const onlyBlur1Elements = document.querySelectorAll(".onlyBlur1");
const onlyBlur2Elements = document.querySelectorAll(".onlyBlur2");

hiddenElements.forEach((el) => observer.observe(el));
hidden1Elements.forEach((el) => observer.observe(el));
hidden2Elements.forEach((el) => observer.observe(el));
hidden3Elements.forEach((el) => observer.observe(el));

onlyBlurElements.forEach((el) => observer.observe(el));
onlyBlur1Elements.forEach((el) => observer.observe(el));
onlyBlur2Elements.forEach((el) => observer.observe(el));