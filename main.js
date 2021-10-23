const linksSocialMedia = {
  github: 'OThyagoCarvalho',
  youtube: '',
  facebook: '',
  instagram: 'othyagocarvalho',
  twitter: 'othyagocarvalho'
}
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('Class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(gitResponse => gitResponse.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGitProfile.href = data.html_url
      userProfilePic.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
