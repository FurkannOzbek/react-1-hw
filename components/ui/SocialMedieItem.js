export const SocialMediaItem = ({ url, title, icon }) => {
  return (
    <li style={{ display: "flex", alignItems: "center" }}>
      <img src={icon} height="20px" width="20px" alt="" />
      <a href={url} style={{ marginLeft: "0.5em" }}>
        {title}
      </a>
    </li>
  );
};
