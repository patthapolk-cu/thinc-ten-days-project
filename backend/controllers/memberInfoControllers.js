const Member = require('../models/memberModel');

const getAllMembersInfo = async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getMemberInfo = async (req, res) => {
  const { userid } = req.params;
  try {
    const member = await Member.findOne({ userid });
    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }
    res.json(member);
  } catch (error) {
    res.status(500).json({ message: 'Error getting member', error });
  }
};

const updateMemberInfo = async (req, res) => {
  const { userid } = req.params;
  const { cash, product, wishlist, cart } = req.body;

  try {
    const updatedMember = await Member.findOneAndUpdate(
      { userid },
      { cash, product, wishlist, cart },
      { new: true }
    );

    if (!updatedMember) {
      return res.status(404).json({ message: 'Member not found' });
    }

    res.json({ message: 'Member updated', member: updatedMember });
  } catch (error) {
    res.status(500).json({ message: 'Error updating member', error });
  }
};

const addMemberInfo = async (req, res) => {
  const { name, userid, cash, product, wishlist, cart } = req.body;

  try {
    const newMember = await Member.create({ name, userid, cash, product, wishlist, cart });

    res.status(201).json({ message: 'Member created', member: newMember });
  } catch (error) {
    res.status(500).json({ message: 'Error creating member', error });
  }
};

module.exports = {
  getAllMembersInfo,
  getMemberInfo,
  updateMemberInfo,
  addMemberInfo,
};
