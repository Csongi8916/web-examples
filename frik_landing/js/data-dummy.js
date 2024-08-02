const paragraphs = [];
paragraphs.push('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin accumsan eget nibh ut hendrerit. Praesent auctor ex eget arcu commodo ultricies. Ut imperdiet vestibulum tempus. Sed rhoncus, dui vel eleifend aliquet, est nulla dapibus metus, vitae porttitor libero sapien ultricies ipsum. Etiam sodales porttitor eros eu bibendum. Phasellus augue tellus, facilisis varius luctus ut, consectetur sit amet tellus. Vivamus eget risus pretium dui sodales fermentum posuere eu erat.');
paragraphs.push('Sed a dictum dolor. Sed placerat ultrices ipsum, in maximus lorem pretium vel. Nam tincidunt suscipit ultricies. Mauris interdum justo ac rhoncus ullamcorper. Aenean vitae massa urna. In vel interdum nisl, in gravida elit. Ut sapien nisl, egestas in commodo auctor, dictum ut dui. Nunc ac sem semper, commodo orci eu, euismod magna. Phasellus eros risus, ultrices at sem vitae, dictum tincidunt tortor.');
paragraphs.push('Integer id dolor nisl. Donec vitae ante erat. Nulla venenatis sapien at felis consectetur, quis lobortis nibh viverra. Fusce tempus, lectus in auctor convallis, felis sapien dignissim quam, at finibus massa metus in arcu. Proin in facilisis velit. Ut eget faucibus felis, vel dignissim mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean fermentum leo magna, sit amet varius ipsum consectetur ac. Sed consectetur tortor lectus, in imperdiet ante mollis elementum. Nulla facilisi. Vestibulum maximus ut ipsum id venenatis. Nam euismod viverra purus. Aliquam lacinia, quam vitae pellentesque sodales, velit augue suscipit risus, et commodo dui lacus vel mi.');

let moduleTextContentElements = document.querySelectorAll('.module-text-content');
//let moduleTextElements = document.querySelectorAll('.module-text');

moduleTextContentElements.forEach(element => {
  element.childNodes[1].textContent = paragraphs[0];
  element.childNodes[3].textContent = paragraphs[1];
  element.childNodes[5].textContent = paragraphs[2];
})
